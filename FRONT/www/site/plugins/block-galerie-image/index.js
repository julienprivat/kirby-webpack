panel.plugin("cookbook/block-galerie-services", {
  blocks: {
   'galerie-image': {
      data() {
        return {
          text: "No text value"
        };
      },
      computed: {
        image() {
          if(this.content.image) {
            return this.content.image[0] || 'image ou vidéo manquante';
          } else {
            return {}
          }        
        },
        format() {
          if( this.content.format) {
            return this.content.format || 'format manquant'
          } else {
            'format manquant'
          }

        }
      },
      template: `
        <div @dblclick="open">
          <k-aspect-ratio
            class="k-block-type-card-image 2/4"
            cover="true"
            ratio="1/1"
          >
            <img
              v-if="image.url"
              :src="image.url"
              alt=""
            >
          </k-aspect-ratio>
          <div v-if='format' class='ratio'>{{format}}</div>
        </div>
      `
    },
  }
});