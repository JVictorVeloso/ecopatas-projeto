document.addEventListener('DOMContentLoaded', function () {
  /* 1. FAZER A FOTO APARECER QUANDO SELECIONADA */
  const inputFoto = document.getElementById('foto-animal')
  const previewContainer = document.getElementById('preview-container')
  const previewImagem = document.getElementById('preview-imagem')

  if (inputFoto) {
    inputFoto.addEventListener('change', function (e) {
      const arquivo = e.target.files[0]
      if (arquivo) {
        const leitor = new FileReader()
        leitor.onload = function (evento) {
          previewImagem.src = evento.target.result
          previewContainer.style.display = 'block' // Mostra a caixa da foto
        }
        leitor.readAsDataURL(arquivo)
      } else {
        previewContainer.style.display = 'none'
      }
    })
  }
  /* 2. SIMULAR ENVIO DO FORMULÁRIO */
  const formCadastro = document.getElementById('form-cadastro')

  if (formCadastro) {
    formCadastro.addEventListener('submit', function (e) {
      e.preventDefault() // Impede a página de recarregar

      const btn = formCadastro.querySelector('button[type="submit"]')
      const textoOriginal = btn.innerText

      // Muda o botão para parecer que está carregando
      btn.innerText = 'ENVIANDO...'
      btn.disabled = true
      btn.style.opacity = '0.7'

      // Espera 1.5 segundos e mostra sucesso
      setTimeout(() => {
        alert('Sucesso! O animal foi cadastrado para análise.')
        formCadastro.reset() // Limpa os campos
        if (previewContainer) previewContainer.style.display = 'none' // Limpa a foto

        // Devolve o botão ao normal
        btn.innerText = textoOriginal
        btn.disabled = false
        btn.style.opacity = '1'
      }, 1500)
    })
  }
})
