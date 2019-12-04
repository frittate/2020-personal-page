export function loadAllData(prismic){
  return new Promise((resolve, reject) => {
    let projects = [];

    try {
      let item = {
        id: '',
        client: '',
        categories: [],
        description: '',
        preview_image: {
          src: '',
          alt: ''
        },
        images: [],
        technologies: []
      }

      prismic.client
        .query(prismic.Predicates.at('document.type', 'portfolio-project'))
        .then(response => {
          console.log(response);
          response.results.forEach(el => {
            item.id = el.uid;
            item.client = el.data.project_name[0].text;
            item.categories = el.tags;
            item.description = el.data.project_description[0].text;
            item.preview_image.src = '',
            item.images = el.data.project_images
            el.data.project_category.forEach(sub_el => {
              item.technologies.push(sub_el.technologies)
            })

            projects.push(item);
          });
          resolve(projects)
                /* const r = response.results[0].data
                detailData.description = r.description__long[0].text
                if (r.body[0].items.length != 0) {
                  r.body[0].items.forEach(element => {
                    detailData.gallery.push(element);
                  });
                } */
          });
            //return detailData
        } catch (error) {
          console.log(error)
          reject()
        }
  })
}

export function loadSingleData(prismic, uid){
  return new Promise((resolve, reject) => {
    try {
      let item = {
        id: '',
        client: '',
        categories: [],
        description: '',
        preview_image: {
          src: '',
          alt: ''
        },
        images: [],
        technologies: []
      }

      prismic.client
        .getByUID('portfolio-project', uid)
        .then(document => {
          console.log(document)
        })

      resolve(item)
    } catch (error) {
      reject()
    }
  })
}