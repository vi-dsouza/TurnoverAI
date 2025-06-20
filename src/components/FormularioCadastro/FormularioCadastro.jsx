import React from 'react'
import { useEffect} from 'react';
import style from './FormularioCadastro.module.css';

const FormularioCadastro = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const dados = {
            nome: document.getElementById('nome').value,
            setor: document.getElementById('setor').value,
            gender: document.getElementById('gender').value,
            work_life_balance: document.getElementById('work_life_balance').value,
            marital_status: document.getElementById('marital_status').value,
            job_level: document.getElementById('job_level').value,
            remote_work: document.getElementById('remote_work').value
        };

        fetch('http://localhost:5000/cadastroFuncionarios/cadastrar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Resposta da API: ', data);
            alert('Funcionário cadastrado com sucesso!');
        })
        .catch(err => {
            console.error('Erro ao cadastrar: ', err);
            alert('Erro ao cadastrar!');
        });
    };

  return (
    <div className={style.containerForm}>
        <div className={style.titulo}>
            Cadastro de Funcionários
        </div>
        <p>Prencha os dados solicitados</p>

        <div>
            <form onSubmit={handleSubmit} className={style.formulario}>
                <div className={style.gridForm}>
                    {/* Coluna esquerda */}
                    <div className={style.campos}>
                        <div className={style.inputGroup}>
                            <label>Nome</label>
                            <input 
                                id="nome"
                                type="text" 
                                placeholder="Nome Completo" 
                            />
                        </div>

                        <div className={style.inputGroup}>
                            <label>Setor:</label>
                            <input 
                                id="setor"
                                type="text" 
                                placeholder='Setor'
                            />
                        </div>
                        <div className={style.inputGroup}>
                            <label>Equilíbrio entre vida profissional e pessoal</label>
                            <select id="work_life_balance" name="work_life_balance">
                            <option value="" hidden>Selecione</option>
                            <option value="razoavel">Razoável</option>
                            <option value="ruim">Ruim</option>
                            <option value="bom">Bom</option>
                            <option value="excelente">Excelente</option>
                            </select>
                        </div>
                        <div className={style.inputGroup}>
                            <label>Gênero</label>
                            <select id="gender" name="gender">
                            <option value="" hidden>Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>

                    {/* Coluna direita */}
                    <div className={style.campos}>
                    <div className={style.inputGroup}>
                        <label>Estado Civil</label>
                        <select id="marital_status" name="marital_status">
                        <option value="" hidden>Selecione</option>
                        <option value="casado">Casado</option>
                        <option value="divorciado">Divorciado</option>
                        <option value="solteiro">Solteiro</option>
                        </select>
                    </div>

                    <div className={style.inputGroup}>
                        <label>Nível de Trabalho</label>
                        <select id="job_level" name="job_level">
                        <option value="" hidden>Selecione</option>
                        <option value="entry">Entry</option>
                        <option value="mid">Mid</option>
                        <option value="senior">Senior</option>
                        </select>
                    </div>

                    <div className={style.inputGroup}>
                        <label>Trabalho Remoto</label>
                        <select id="remote_work" name="remote_work">
                        <option value="" hidden>Selecione</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                        </select>
                    </div>
                    </div>
                </div>

                <a href="#">Termos de Uso</a>

                <button className={style.botaoCadastrar}>Cadastrar</button>
            </form>

        </div>
    </div>
  )
}

export default FormularioCadastro