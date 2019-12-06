export function loadAllData(prismic){
  return new Promise((resolve, reject) => {
    const projects = [];

    try {
      prismic.client
        .query(prismic.Predicates.at('document.type', 'portfolio-project'))
        .then(response => {
          console.log(response);
          response.results.forEach(el => {
            const item = {
              id: el.uid,
              client: el.data.project_name[0].text,
              categories: el.tags,
              description: el.data.project_description[0].text,
              preview_image: el.data.preview_image,
              images: el.data.project_images,
              technologies: []
            }

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
          const d = document;
          item.id = d.uid;
          item.client = d.data.project_name[0].text;
          item.categories = d.tags;
          item.description = d.data.project_description[0].text;
          item.preview_image.src = '',
          item.images = d.data.project_images
          d.data.project_category.forEach(el => {
            item.technologies.push(el.technologies)
          })
        resolve(item);
        })

    } catch (error) {
      reject()
    }
  })
}