function corregir() {
    const form = document.getElementById('quizForm');
    const questions = form.querySelectorAll('.question');
    let correctas = 0;
    let incorrectas = 0;

    questions.forEach(q => {
      const correct = q.dataset.correct;
      const name = q.querySelector('input').name;
      const selected = form.querySelector(`input[name="${name}"]:checked`);

      // Limpiar estilos previos
      q.querySelectorAll("label").forEach(l => {
        l.classList.remove("correct", "incorrect");
      });

      if (selected) {
        const label = selected.parentElement;
        if (selected.value === correct) {
          correctas++;
          label.classList.add("correct");
        } else {
          incorrectas++;
          label.classList.add("incorrect");
        }
      } else {
        incorrectas++;
      }
    });

    alert(`Respuestas correctas: ${correctas}\nRespuestas incorrectas: ${incorrectas}`);
  }