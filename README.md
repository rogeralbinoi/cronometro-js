# cronometro-js

Este é um simples cronômetro para contagem de quantos minutos o usuário ficou na página.

Inclua alguma versão do [jQuery](https://jquery.com/) e o arquivo [js/dist/main.js](https://rogeralbinoi.github.io/cronometro-js/js/dist/main.js) em seu projeto.

**Como usar?**

Tanto o ```el``` quanto o ```input``` são opcionais.

```
<script>
    var cron = new Cronometro({
        el: $('.cron'),
        input: $('#input-cron')
    });
</script>
```

[Exemplo](https://rogeralbinoi.github.io/cronometro-js/)
