import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import IconBase from './components/IconBase.vue'
import IconEmojiHappy from './components/icons/IconEmojiHappy.vue'
import IconEmojiUnhappy from './components/icons/IconEmojiUnhappy.vue'
import IconEmojiFairlyunhappy from './components/icons/IconEmojiFairlyunhappy.vue'
import IconEmojiFairlyhappy from './components/icons/IconEmojiFairlyhappy.vue'
import IconEmojiNeutral from './components/icons/IconEmojiNeutral.vue'

export default
{
  components:
  {
    VueSlider,
    IconBase,
    IconEmojiHappy,
    IconEmojiUnhappy,
    IconEmojiNeutral,
    IconEmojiFairlyunhappy,
    IconEmojiFairlyhappy
  },
  data: function ()
  {
      // Options du slider
      // Emoji par défaut : emojiNeutral
      // Couleur du slider : process1
      // différents emoji utilisés comme valeurs : data
      return {
        value: 'emojiNeutral',
        process1: dotsPos => [[50, dotsPos[0],{ background: 'linear-gradient(to right,  #42d7f4 0%,#42f4bc 100%)' }]],
        data: ['emojiUnappy', 'emojiFairlyunhappy', 'emojiNeutral', 'emojiFairlyhappy', 'emojiHappy'],
        options:
        {
            // Taille du point du slider
            dotSize: 40
        }
      }
  },
  methods:
  {
    // Lorsqu'on clique sur le slider
    onDragStart($event)
    {
        //Permet de rendre le titre transparent pendant que l'on utilise le slider
        this.$refs.title.style.opacity = "0.2";
        // Effet de fade avec mouvement vers le haut sur l'emoji lorsqu'on clique sur le slider
        this.$refs.value.classList.add("fadeInMoveUp");
        this.$refs.value.classList.remove("fadeInMoveDown");
    },
    // Lorsqu'on lâche le slider
    onDragEnd($event)
    {
        //Permet de rendre le titre transparent pendant que l'on utilise le slider
        this.$refs.title.style.opacity = "1";
        // Effet de fade avec mouvement vers le bas sur l'emoji lorsqu'on lâche le slider
        this.$refs.value.classList.remove("fadeInMoveUp");
        // On enlève la classe ajouter lors du drag start
        this.$refs.value.classList.add("fadeInMoveDown");
    }
  }
}