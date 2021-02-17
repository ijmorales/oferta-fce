export interface Curso {
  id: number;
  curso?: string;
  sede?: string;
  materia?: string;
  docente?: string;
  dias?: string;
  horarios?: Array<Horario>;
  detalle?: Detalle;
  nuevo?: boolean;
  titular?: string;
  sabado?: boolean;
}

export interface Horario {
  dia?: string;
  hora?: string;
}

export interface Detalle {
  comentarios?: Array<string>;
  estadisticas?: Array<Estadistica>;
  corte?: number;
  maxRegistro?: number;
  porcentajeAprobados?: number;
  puntaje?: number;
}

export interface Estadistica {
  anio?: number;
  cuatrimestre?: number;
  inscriptos?: number;
  ausentes?: number;
  aprobados?: number;
  regularizados?: number;
  reprobados?: number;
}
