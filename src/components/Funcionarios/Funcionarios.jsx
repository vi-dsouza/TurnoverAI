import React from 'react';
import style from './Funcionarios.module.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';
import { HotTable } from '@handsontable/react-wrapper';
import 'handsontable/styles/handsontable.min.css';
import 'handsontable/styles/ht-theme-main.min.css';

registerAllModules();

const headers = ['', 'Nome', 'Gênero', 'Equilíbrio', 'Estado Civil', 'Nível de Trabalho', 'Trabalho Remoto', 'Situação', 'Edição'];

const Funcionarios = () => {
  return (
    <div className={style.container}>
      <div className="ht-theme-main-dark">
        <div style={{ maxWidth: '100%', overflowX: 'auto', height: '76vh' }}>
          <HotTable
            width="100%"
            height="100%"
            stretchH="all"
            colHeaders={headers}
            rowHeaders={false}
            columns={headers.map(() => ({ width: 120 }))}
            data={
                [['2019', 'João', 'Masculino', 'Equilibrado', 'Solteiro', 'Pleno', 'Sim'],
                ['2020', 'Maria', 'Feminino', 'Estável', 'Casada', 'Sênior', 'Não'],
                ['2021', 'Carlos', 'Masculino', 'Turbulento', 'Divorciado', 'Júnior', 'Sim'],
                ['2019', 'João', 'Masculino', 'Equilibrado', 'Solteiro', 'Pleno', 'Sim'],
                ['2020', 'Maria', 'Feminino', 'Estável', 'Casada', 'Sênior', 'Não'],
                ['2021', 'Carlos', 'Masculino', 'Turbulento', 'Divorciado', 'Júnior', 'Sim'],
                ['2019', 'João', 'Masculino', 'Equilibrado', 'Solteiro', 'Pleno', 'Sim'],
                ['2020', 'Maria', 'Feminino', 'Estável', 'Casada', 'Sênior', 'Não'],
                ['2021', 'Carlos', 'Masculino', 'Turbulento', 'Divorciado', 'Júnior', 'Sim'],
                ['2019', 'João', 'Masculino', 'Equilibrado', 'Solteiro', 'Pleno', 'Sim'],
                ['2020', 'Maria', 'Feminino', 'Estável', 'Casada', 'Sênior', 'Não'],
                ['2021', 'Carlos', 'Masculino', 'Turbulento', 'Divorciado', 'Júnior', 'Sim'],
                ['2019', 'João', 'Masculino', 'Equilibrado', 'Solteiro', 'Pleno', 'Sim'],
                ['2020', 'Maria', 'Feminino', 'Estável', 'Casada', 'Sênior', 'Não'],
                ['2021', 'Carlos', 'Masculino', 'Turbulento', 'Divorciado', 'Júnior', 'Sim'],
                ['2019', 'João', 'Masculino', 'Equilibrado', 'Solteiro', 'Pleno', 'Sim'],
                ['2020', 'Maria', 'Feminino', 'Estável', 'Casada', 'Sênior', 'Não'],
                ['2021', 'Carlos', 'Masculino', 'Turbulento', 'Divorciado', 'Júnior', 'Sim'],
                ['2019', 'João', 'Masculino', 'Equilibrado', 'Solteiro', 'Pleno', 'Sim'],
                ['2020', 'Maria', 'Feminino', 'Estável', 'Casada', 'Sênior', 'Não'],
                ['2021', 'Carlos', 'Masculino', 'Turbulento', 'Divorciado', 'Júnior', 'Sim'],
                ['2019', 'João', 'Masculino', 'Equilibrado', 'Solteiro', 'Pleno', 'Sim'],
                ['2020', 'Maria', 'Feminino', 'Estável', 'Casada', 'Sênior', 'Não'],
                ['2021', 'Carlos', 'Masculino', 'Turbulento', 'Divorciado', 'Júnior', 'Sim'],
              
            ]}
            autoWrapRow={true}
            autoWrapCol={true}
            licenseKey="non-commercial-and-evaluation"
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #a9825a',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Funcionarios;
