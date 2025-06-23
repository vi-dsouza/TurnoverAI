import React, { useState, useEffect } from 'react';
import style from './Funcionarios.module.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react-wrapper';
import 'handsontable/styles/handsontable.min.css';
import 'handsontable/styles/ht-theme-main.min.css';

registerAllModules();

const headers = ['ID', 'Nome', 'Setor', 'Gênero', 'Equilíbrio', 'Estado Civil', 'Nível de Trabalho', 'Trabalho Remoto', 'Prob_Permanência', 'Attrition'];

const Funcionarios = () => {
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch('http://localhost:5000/cadastroFuncionarios/consulta', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!resposta.ok) {
          throw new Error(`Erro HTTP: ${resposta.status}`);
        }
  
        const json = await resposta.json();
  
        setDados(json);
        setErro(null);
      } catch (erro) {
        console.error('Erro ao carregar dados:', erro);
        setErro('Falha ao carregar dados. Verifique a conexão com o servidor.');
      } finally {
        setCarregando(false);
      }
    };
  
    carregarDados();
  }, []);
  

  return (
    <div className={style.container}>
      <div className="ht-theme-main-dark">
        <div style={{ maxWidth: '100%', overflowX: 'auto', height: '76vh' }}>
          {carregando ? (
            <p style={{ color: '#fff' }}>Carregando dados...</p>
          ) : erro ? (
            <p style={{ color: 'red' }}>{erro}</p>
          ) : (
            <HotTable
              width="100%"
              height="100%"
              stretchH="all"
              colHeaders={headers}
              rowHeaders={false}
              columns={headers.map(() => ({ width: 120 }))}
              data={dados}
              autoWrapRow={true}
              autoWrapCol={true}
              licenseKey="non-commercial-and-evaluation"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #a9825a',
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Funcionarios;
