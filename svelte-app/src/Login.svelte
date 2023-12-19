<script>
    let formData = {
      name: '',
      email: '',
      password: '',
    };
  
    function validateForm() {
      let errors = {};
  
      if (!formData.name) {
        errors.name = 'Логин обязателен';
      }
  
      if (!formData.email) {
        errors.email = 'Email обязателен';
      } else if (!isValidEmail(formData.email)) {
        errors.email = 'Некорректный email';
      }
  
      if (!formData.password) {
        errors.password = 'Пароль обязателен';
      } else if (formData.password.length < 6) {
        errors.password = 'Пароль должен быть длиннее 6 символов';
      }
  
      return errors;
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      let errors = validateForm();
  
      if (Object.keys(errors).length === 0) {
        // данные прошли валидацию
        console.log(formData);
      } else {
        // данные не прошли валидацию
        console.log(errors);
      }
    }
  </script>
  
  <form on:submit|preventDefault={handleSubmit}>
    <label>
      Name:
      <input type="text" bind:value={formData.name} />
      {#if formData.name === ''}
        <span>{validateForm().name}</span>
      {/if}
    </label>
    <label>
      Email:
      <input type="email" bind:value={formData.email} />
      {#if formData.email === ''}
        <span>{validateForm().email}</span>
      {:else if validateForm().email}
        <span>{validateForm().email}</span>
      {/if}
    </label>
    <label>
      Пароль:
      <input type="password" bind:value={formData.password} />
      {#if formData.password === ''}
        <span>{validateForm().password}</span>
      {:else if validateForm().password}
        <span>{validateForm().password}</span>
      {/if}
    </label>
    <button type="submit">Войти</button>
  </form>


  <style>
    form {
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }
    span {
        color: red;
    }
    label {
        display: flex;
        flex-direction: column;
    }
  </style>