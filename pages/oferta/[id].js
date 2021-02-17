import fs from 'fs';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { FaSadTear } from 'react-icons/fa';

import Opinion from '../../src/components/cursos/Opinion';
import Layout from '../../src/components/layout/Layout';
export default function Curso({ curso }) {
  if (curso == null) {
    return <div>Page not found</div>;
  }

  const comentarios = [];
  if (curso.detalle && curso.detalle.comentarios) {
    const icon = useRef(1);
    curso.detalle.comentarios.forEach((c, idx) => {
      comentarios.push(
        <Opinion
          key={idx}
          text={c}
          number={idx + 1}
          userNumber={icon.current}
        />
      );
      if (icon.current < 3) {
        icon.current += 1;
      } else {
        icon.current = 1;
      }
    });
  }

  return (
    <Layout>
      {comentarios.length > 1 ? (
        <>
          <div id="breadcrumb" className="pt-5 italic underline text-gray-600">
            <a href="/oferta">OFERTA</a>/
            <a href={`/oferta/${curso.id}`}>
              {`${curso.materia.toUpperCase()} (${curso.curso})`}
            </a>
          </div>
          <h2 className="text-3xl font-bold mt-9 text-war-blue">Opiniones</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-9 mt-5">
            {comentarios.map((el) => el)}
          </div>
          <a href="/oferta" className="mt-5 flex justify-center">
            <button className="border border-gray-700 bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-700 focus:outline-none focus:shadow-outline">
              Volver
            </button>
          </a>
        </>
      ) : (
        <div className="mt-9 flex flex-grow align-middle items-center flex-col">
          <FaSadTear className="h-24 w-24 flex text-war-blue" />
          <p className="text-3xl flex mt-5 text-war text-center">
            Este curso no tiene opiniones
          </p>
          <a href="/oferta" className="mt-5">
            <button className="border border-gray-700 bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-700 focus:outline-none focus:shadow-outline">
              Volver
            </button>
          </a>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, ...ctx }) {
  const oferta = JSON.parse(
    fs.readFileSync('data/oferta.example.json', 'utf-8')
  );
  const curso = oferta.find((curso) => curso.id === parseInt(params.id));

  return { props: { curso: curso || null } };
}

export async function getStaticPaths() {
  const oferta = JSON.parse(
    fs.readFileSync('data/oferta.example.json', 'utf-8')
  );
  const paths = oferta.map((curso) => {
    return {
      params: { id: curso.id.toString() }
    };
  });

  return {
    paths: paths,
    fallback: false
  };
}

Curso.propTypes = {
  curso: PropTypes.object
};
