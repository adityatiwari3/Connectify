module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'chatbox_bg_dark': "url('https://cutewallpaper.org/23/whatsapp-default-background-wallpaper/2501717560.jpg')",
        'chatbox_bg_light': "url('https://cutewallpaper.org/21/whatsapp-background-wallpapers/WhatsApp-original-chat-background-image-A-GitHub.png')",
       })
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}
