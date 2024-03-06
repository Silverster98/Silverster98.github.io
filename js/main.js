import { createApp } from 'vue'

  let ownername = 'Zan Wang'
  let co_authors_link = {
    'Wei Liang': 'https://liangwei-bit.github.io/web/',
    'Hanqing Wang': 'https://hanqingwangai.github.io/',
    'Siyuan Huang': 'https://siyuanhuang.com/',
    'Yixin Chen': 'https://yixchen.github.io/',
    'Tengyu Liu': 'http://tengyu.ai/',
    'Yixin Zhu': 'https://yzhu.io/',
    'Lap-Fai Yu': 'https://craigyuyu.github.io/home/',
    'Jiangyong Huang': 'https://huangjy-pku.github.io/',
    'William Yicheng Zhu': '/',
    'Baoxiong Jia': 'https://buzz-beater.github.io/',
    'Xiaojian Ma': 'https://web.cs.ucla.edu/~xm/',
    'Qing Li': 'https://liqing-ustc.github.io/',
    'Puhao Li': 'https://xiaoyao-li.github.io/',
    'Song-Chun Zhu': 'http://www.stat.ucla.edu/~sczhu/',
    'Jinlu Zhang': 'https://jinluzhang.site/',
    'Nan Jiang': 'https://jnnan.github.io/',
  }
  let publications = [
    // {
    //   "figure": './images/teasers/scenediffuser.png',
    //   "title": '',
    //   "publisher": 'arXiv',
    //   "authors": [],
    //   "equal": ['Siyuan Huang', 'Zan Wang'],
    //   "links": {},
    //   "bibtex": ``,
    //   "abstract": ''
    // },
    {
      "figure": '',
      "title": 'Scaling Up Dynamic Human-Scene Interaction Modeling',
      "publisher": 'CVPR 2024',
      "authors": ['Nan Jiang', 'Zhiyuan Zhang', 'Hongjie Li', 'Xiaoxuan Ma', 'Zan Wang', 'Yixin Chen', 'Tengyu Liu', 'Yixin Zhu', 'Siyuan Huang'],
      "equal": ['Nan Jiang', 'Zhiyuan Zhang'],
      "links": {
        "project": 'https://jnnan.github.io/trumans/',
      },
      "bibtex": `@inproceedings{jiang2024scaling,
  title={Scaling Up Dynamic Human-Scene Interaction Modeling},
  author={Jiang, Nan and Zhang, Zhiyuan and Li, Hongjie and Ma, Xiaoxuan and Wang, Zan and Chen, Yixin and Liu, Tengyu and Zhu, Yixin and Huang, Siyuan},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2024}
}`,
      "abstract": ''
    },
    {
      "figure": '',
      "title": 'Move as You Say, Interact as You Can: Language-guided Human Motion Generation with Scene Affordance',
      "publisher": 'CVPR 2024',
      "authors": ['Zan Wang', 'Yixin Chen', 'Baoxiong Jia', 'Puhao Li', 'Jinlu Zhang', 'Jingze Zhang', 'Tengyu Liu', 'Yixin Zhu', 'Wei Liang', 'Siyuan Huang'],
      "equal": [],
      "links": {},
      "bibtex": ``,
      "abstract": ''
    },
    {
      "figure": './images/teasers/scenediffuser.png',
      "title": 'Diffusion-based Generation, Optimization, and Planning in 3D Scenes',
      "publisher": 'CVPR 2023',
      "authors": ['Siyuan Huang', 'Zan Wang', 'Puhao Li', 'Baoxiong Jia', 'Tengyu Liu', 'Yixin Zhu', 'Wei Liang', 'Song-Chun Zhu'],
      "equal": ['Siyuan Huang', 'Zan Wang'],
      "links": {
        "paper": "https://scenediffuser.github.io/paper.pdf",
        "arXiv": 'https://arxiv.org/abs/2301.06015',
        "supp": 'https://scenediffuser.github.io/supp.pdf',
        "project": 'https://scenediffuser.github.io/',
        "code": 'https://github.com/scenediffuser/Scene-Diffuser',
        "huggingface": "https://huggingface.co/spaces/SceneDiffuser/SceneDiffuserDemo",
      },
      "bibtex": `@inproceedings{huang2023diffusion,
  title={Diffusion-based Generation, Optimization, and Planning in 3D Scenes},
  author={Huang, Siyuan and Wang, Zan and Li, Puhao and Jia, Baoxiong and Liu, Tengyu and Zhu, Yixin and Liang, Wei and Zhu, Song-Chun},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year={2023}
}`,
      "abstract": ''
    },
    {
      "figure": './images/teasers/gvue.png',
      "title": 'Perceive, Ground, Reason, and Act: A Benchmark for General-purpose Visual Representation',
      "publisher": 'arXiv',
      "authors": ['Jiangyong Huang', 'William Yicheng Zhu', 'Baoxiong Jia', 'Zan Wang', 'Xiaojian Ma', 'Qing Li', 'Siyuan Huang'],
      "equal": ['Jiangyong Huang', 'William Yicheng Zhu'],
      "links": {
        "arXiv": 'https://arxiv.org/abs/2211.15402',
        "project": 'https://sites.google.com/view/g-vue',
        "code": 'https://github.com/wllmzhu/G-VUE',
      },
      "bibtex": `@article{huang2022perceive,
  title={Perceive, Ground, Reason, and Act: A Benchmark for General-purpose Visual Representation},
  author={Huang, Jiangyong and Zhu, William Yicheng and Jia, Baoxiong and Wang, Zan and Ma, Xiaojian and Li, Qing and Huang, Siyuan},
  journal={arXiv preprint arXiv:2211.15402},
  year={2022}
}`,
      "abstract": ''
    },
    {
      "figure": './images/teasers/humanise.png',
      "title": 'HUMANISE: Language-conditioned Human Motion Generation in 3D Scenes',
      "publisher": 'NeurIPS 2022',
      "authors": ['Zan Wang', 'Yixin Chen', 'Tengyu Liu', 'Yixin Zhu', 'Wei Liang', 'Siyuan Huang'],
      "equal": [],
      "links": {
        "paper": 'https://silvester.wang/HUMANISE/paper.pdf',
        "arXiv": 'https://arxiv.org/abs/2210.09729',
        "project": 'https://silvester.wang/HUMANISE/',
        "code": 'https://github.com/Silverster98/HUMANISE',
        "data": 'https://docs.google.com/forms/d/e/1FAIpQLSfzhj2wrRLqAXFVOTn8K5NDN-J_5HueRTohMAlayqBuPPWA1w/viewform?usp=sf_link',
      },
      "bibtex": `@inproceedings{wang2022humanise,
  title={HUMANISE: Language-conditioned Human Motion Generation in 3D Scenes},
  author={Wang, Zan and Chen, Yixin and Liu, Tengyu and Zhu, Yixin and Liang, Wei and Huang, Siyuan},
  booktitle={Advances in Neural Information Processing Systems (NeurIPS)},
  year={2022}
}`,
      "abstract": ''
    },
    {
      "figure": './images/teasers/pearl.png',
      "title": 'PEARL: Parallelized Expert-Assisted Reinforcement Learning for Scene Rearrangement Planning',
      "publisher": 'arXiv',
      "authors": ['Hanqing Wang', 'Zan Wang', 'Wei Liang', 'Lap-Fai Yu'],
      "equal": [],
      "links": {
        "arXiv": 'https://arxiv.org/abs/2105.04088',
      },
      "bibtex": `@article{wang2021pearl,
  title={PEARL: Parallelized Expert-Assisted Reinforcement Learning for Scene Rearrangement Planning},
  author={Wang, Hanqing and Wang, Zan and Liang, Wei and Yu, Lap-Fai},
  journal={arXiv preprint arXiv:2105.04088},
  year={2021}
}`,
      "abstract": ''
    },
  ]

  function getAuthorHtml(authors, ownernames, equal) {
    let dom = []
    for (let a of authors) {
      let ec = equal.includes(a) ? '*' : ''
      if (a === ownername) {
        dom.push(`<span><strong>${a}` + ec + `</strong></span>`)
      } else {
        if (co_authors_link[a] === undefined) {
          dom.push(`<span><a href="/">${a}` + ec + `</a></span>`)
        } else {
          dom.push(`<span><a href="${co_authors_link[a]}">${a}` + ec + `</a></span>`)
        }
      }
    }
    return dom.join(', ')
  }

  function getPaperLinks(pub_links) {
    let links = ''
    for (let key in pub_links) {
      links += `&nbsp;&nbsp;<a href="${pub_links[key]}">${key}</a>&nbsp;&nbsp;/`
    }
    links = links.substring(12, links.length-13)
    
    return links
  }

  function getPubsFromArray() {
    let pubs = []
    for (let item of publications) {
      let pub = {...item}
      if (pub['figure'] == '') pub['figure'] = './images/teasers/placeholder.jpg'
      pub['authors'] = getAuthorHtml(pub['authors'], ownername, pub['equal'])
      pub['links'] = getPaperLinks(pub['links'])
      pubs.push(pub)
    }
    return pubs
  }

  let app = createApp({
    data() {
      return {
        currentYear: (new Date()).getFullYear(),
        pubs: getPubsFromArray()
      }
    }
  }).component('my-publication', {
    props: ['pub'],
    template: `
      <div class="box">
        <div class="columns is-variable is-2">
          <div class="column is-3">
            <div class="image">
              <img v-bind:src="pub.figure">
            </div>
          </div>

          <div class="column is-9 p-item">
            <h6 class="title is-6 p-title">{{ pub.title }}</h6>
            <p class="p-publisher">{{ pub.publisher }}</p>
            <p class="p-author"><span v-html="pub.authors"></span></p>
            <div class="p-link">
              <span v-html="pub.links"></span>
              <span v-if="bibLinkActive">&nbsp;&nbsp;/&nbsp;&nbsp;<a v-on:click="bibtexActive=!bibtexActive">bibtex</a></span>
            </div>
            <p v-if="abstarctActive" class="pub-abstract">{{ pub.abstract }}</p>
          </div>
        </div>

        <div v-if="bibtexActive">
            <pre class="code pub-code"><code>{{ pub.bibtex }}</code></pre>
        </div>
      </div>
    `,
    data: function() {
      return {
        bibtexActive: false,
        bibLinkActive: this.pub.bibtex != null && this.pub.bibtex != undefined && this.pub.bibtex != '',
        abstarctActive: this.pub.abstract != null && this.pub.abstract != undefined && this.pub.abstract != ''
      }
    },
  }).mount('#app')