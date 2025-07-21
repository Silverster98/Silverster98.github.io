<script setup>
import { ref, computed } from 'vue';

const { owner, coAuthorsLinks, pubItem } = defineProps([
  'owner',
  'coAuthorsLinks',
  'pubItem'
]);

function getAuthorHtml(authors, ownername, equal, co_authors_link) {
  let dom = [];
  for (let a of authors) {
    let ec = equal.includes(a) ? '*' : '';
    if (a === ownername) {
      dom.push(`<span><strong>${a}` + ec + `</strong></span>`);
    } else {
      if (co_authors_link[a] === undefined) {
        dom.push(`<span><a>${a}` + ec + `</a></span>`);
      } else {
        dom.push(`<span><a href="${co_authors_link[a]}">${a}` + ec + `</a></span>`);
      }
    }
  }
  return dom.join(', ');
}

function getPaperLinks(pub_links) {
  let links = '';

  // paper link
  if ('paper' in pub_links) {
    links += `<a href="${pub_links['paper']}">Paper</a>&nbsp;&nbsp;/&nbsp;&nbsp;`;
  }
  else if ('arXiv' in pub_links) {
    links += `<a href="${pub_links['arXiv']}">Paper</a>&nbsp;&nbsp;/&nbsp;&nbsp;`;
  }
  else {
    links += `<a>Paper Coming Soon</a>&nbsp;&nbsp;/&nbsp;&nbsp;`;
  }

  // project link
  if ('project' in pub_links) {
    links += `<a href="${pub_links['project']}">Project</a>&nbsp;&nbsp;/&nbsp;&nbsp;`;
  }
  
  return links;
}

const pub = computed(() => {
  let pub = {...pubItem};
  if (pub['figure'] == '') {
    pub['figure'] = '/images/placeholder.jpg';
  }

  pub['authors'] = getAuthorHtml(pub['authors'], owner, pub['equal'], coAuthorsLinks);
  pub['links'] = getPaperLinks(pub['links']);

  return pub;
});

const bibtexActive = ref(false);
</script>

<template>
  <div class="block">
    <div class="columns">
      <div class="column is-12 p-item">
        <p class="p-title">{{ pub.title }}</p>
        <p class="p-publisher"><span v-html="pub.publisher"></span></p>
        <p class="p-author"><span v-html="pub.authors"></span></p>
        <p class="p-link">
          <span v-html="pub.links"></span>
          <span><a v-on:click="bibtexActive=!bibtexActive">Bibtex</a></span>
        </p>

        <div v-if="bibtexActive">
          <pre class="code pub-code"><code>{{ pub.bibtex }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
