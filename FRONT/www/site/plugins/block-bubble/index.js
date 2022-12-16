panel.plugin("cookbook/block-bubble", {
  blocks: {
   'bubble': {
      data() {
        return {
          text: "No text value"
        };
      },
      computed: {
        text_content() {
          if(this.content.text_content) {
            return this.content.text_content|| {};
          } else {
            return null
          }
        },
        color() {
          if(this.content.color) {
            return this.content.color || {};
          } else {
            return null
          }
        },
        back() {
          if(this.content.back) {
            return this.content.back || {};
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
          <style>
            p {
              background-color:{{back}}; 
              color:{{color}};
            }
          </style>
            {{ text_content }}{{color}}
          </k-aspect-ratio>
        </div>
      `
    },
  }
});