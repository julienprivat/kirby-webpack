panel.plugin("cookbook/block-text-bubble", {
  blocks: {
   'text-bubble': {
      data() {
        return {
          text: "No text value"
        };
      },
      computed: {
        text_content() {
          if(this.content.text_content) {
            return this.content.text_content || {};
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
          <div 
          class='text_content'
          v-html='text_content'
          v-bind:style="{ color: color, backgroundColor: back }"></div>
          </k-aspect-ratio>
        </div>
        </k-aspect-ratio>
      </div>
      `
    },
  }
});