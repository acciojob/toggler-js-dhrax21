<script>
      let checkboxes = document.querySelectorAll('input[type="checkbox"]');
      let maxCheckboxes = 2;

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
          let checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;

          if (checkedCount > maxCheckboxes) {
            checkbox.checked = false;
          }
        });
      });
    </script>
