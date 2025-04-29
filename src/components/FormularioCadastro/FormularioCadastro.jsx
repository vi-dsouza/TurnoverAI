import React from 'react'
import style from './FormularioCadastro.module.css';

const FormularioCadastro = () => {
  return (
    <div className={style.containerForm}>
        <div className={style.titulo}>
            Cadastro de Funcionários
        </div>
        <p>Prencha os dados solicitados</p>

        <div>
            <form action="" className={style.formulario}>
                <div className={style.gridForm}>
                    {/* Coluna esquerda */}
                    <div className={style.campos}>
                        <div className={style.inputGroup}>
                            <label>Nome</label>
                            <input type="text" placeholder="Nome Completo" />
                        </div>

                        <div className={style.inputGroup}>
                            <label>Setor:</label>
                            <input type="text" placeholder='Setor'/>
                        </div>

                        <div className={style.inputGroup}>
                            <label>Equilíbrio entre vida profissional e pessoal</label>
                            <input type="text" placeholder="Equilíbrio" />
                        </div>
                        <div className={style.inputGroup}>
                            <label>Gênero</label>
                            <select>
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
                        <select>
                        <option value="" hidden>Selecione</option>
                        <option value="casado">Casado</option>
                        <option value="divorciado">Divorciado</option>
                        <option value="solteiro">Solteiro</option>
                        <option value="viuvo">Viuvo</option>
                        </select>
                    </div>

                    <div className={style.inputGroup}>
                        <label>Nível de Trabalho</label>
                        <select>
                        <option value="" hidden>Selecione</option>
                        <option value="phd">PHD</option>
                        <option value="doutor">Doutor</option>
                        <option value="mestre">Mestre</option>
                        <option value="graduacao">Graduação</option>
                        </select>
                    </div>

                    <div className={style.inputGroup}>
                        <label>Trabalho Remoto</label>
                        <select>
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