import { useState } from 'react';

function Home() {
    return (
    <div>
        <h4>Primeiro Teste</h4>
        <Contador />
        <div>Teste</div>
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() { 
        setContador(contador + 1);
    }  
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
        
}

<div class="container mt-2">
<div class="row">
  <div class="col-12">
    <div class="jumbotron">
      <h1 class="text-center">O jeito mais fácil de fazer suas impressões e fotos!</h1>
      <div class="row justify-content-center">
        <div class="col-auto">
          <p><a class="btn btn-success btn-lg" href="#" role="button">IMPRESSÕES</a>&nbsp;</p>
        </div>
        <div class="col-auto">
          <p><a class="btn btn-primary btn-lg" href="#" role="button">FOTOS</a>&nbsp;</p>
        </div>
      </div>
      <p class="text-center">Você pode nos achar em um grande shopping center de São Paulo, em horários estendidos e inclusive finais de semana e feriados!</p>
      <img src="images/1200x400_Reabertura.gif" alt="" class="img-fluid"> 
    </div>
  </div>
</div>
</div>

export default Home
