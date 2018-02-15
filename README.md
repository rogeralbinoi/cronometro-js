# cronometro-js

Este cronômetro foi feito para fins de estudo.

É um simples cronômetro.

[Exemplo](https://rogeralbinoi.github.io/cronometro-js/)

**Como usar?**

Inclua o arquivo [js/dist/cronometro.js](https://rogeralbinoi.github.io/cronometro-js/js/dist/cronometro.js) em seu projeto.

Nenhuma das options são obrigatórias.

```
<script>
    var cron = new Cronometro({
        // el and input: querySelector or querySelectorAll or getElementById
        el: document.querySelectorAll('.cron'),
        input: document.getElementById('input-cron'),
        autoplay: true
    });
    // Métodos
    // cron.play()
    // cron.pause()
    // cron.stop()
    // cron.reset_and_play()
</script>
```

**ES6**

```
<script>
    // ES6
    import Cronometro from './cronometro-js/dev/cronometro.js'
    var cron = new Cronometro({/* options */});
</script>
```

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details