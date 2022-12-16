panel.plugin("cookbook/block-galerie", {
  blocks: {
   galerie: {
      data() {
        return {
          text: "No text value"
        };
      },
      computed: {
        image() {
          if(this.content.image) {
            return this.content.image[0] || {};
          } else {
            return {}
          }        
        },
        images() {
          if(this.content.images) {
            return this.content.images || {};
          } else {
            return {}
          }        
        },
        video() {
          if(this.content.video) {
            return this.content.video[0] || {};
          } else {
            return {}
          }
        },
        ratio_video() {
          if(this.content.ratio_video) {
            return this.content.ratio_video|| {};
          } else {
            return null
          }
        },
        ratio_image() {
          if(this.content.ratio_image) {
            return this.content.ratio_image || {};
          } else {
            return null
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
            <video v-if='video.url' :src='video.url'></video>
            <div class='double'>
              <div class='double_item'>
                <img
                  v-if="images[0]"
                  :src="images[0].url"
                  alt=""
                >
              </div>
              <div class='double_item'>
                <img
                  v-if="images[1]"
                  :src="images[1].url"
                  alt=""
                >
              </div>
            </div>
          </k-aspect-ratio>
          <div v-if='ratio_video' class='ratio'>Video : {{ ratio_video }}</div>
          <div v-if='ratio_image' class='ratio'>Image : {{ ratio_image }}</div>
          <div v-if='images[0]' class='ratio'>Double</div>
        </div>
      `
    },
  }
});