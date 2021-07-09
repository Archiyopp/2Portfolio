import { useState } from 'react';
import {
  CgMathDivide,
  CgMathEqual,
  CgMathMinus,
  CgMathPlus,
} from 'react-icons/cg';
import Title from '../../../components/utilities/title';
import useTitle from '../../../hooks/useTitle';
import NumberBtn from './number';
export default function Calculator() {
  const [value, setValue] = useState('0');
  const [previous, setPrevious] = useState('0');
  useTitle('Calculator');
  const handleResult = () => {
    switch (value[0]) {
      case '+': {
        const result = Number(previous) + Number(value.slice(2));
        return setValue(result.toString());
      }
      case 'x': {
        const result = Number(previous) * Number(value.slice(2));
        return setValue(result.toString());
      }
      case '-': {
        const result = Number(previous) - Number(value.slice(1));
        return setValue(result.toString());
      }
      case '/': {
        const result = Number(previous) / Number(value.slice(2));
        return setValue(result.toString());
      }
      default:
        break;
    }

    setPrevious('');
  };
  const handleDelete = () => {
    setValue((value) => {
      if (value?.length > 1) {
        return value.slice(0, -1);
      } else {
        return '0';
      }
    });
  };
  return (
    <section className="flex flex-col items-center mx-auto px-2 my-2 max-w-7xl text-base-content min-h-screen">
      <article className="w-80 max-w-2xl grid grid-cols-4 gap-2">
        <div className="col-span-4 text-center">
          <Title>Calculator</Title>
        </div>
        <input
          type="text"
          className=" col-span-4 input input-primary input-bordered cursor-pointer text-2xl"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              setValue(previous);
              setPrevious(value);
            }
            if (e.key === 'Backspace') {
              handleDelete();
            }
          }}
        />
        <button
          className="btn btn-primary text-2xl"
          onClick={() => setValue('')}
        >
          AC
        </button>
        <button
          className="btn btn-primary text-3xl"
          onClick={() => {
            setValue((value) => value + '.');
          }}
        >
          .
        </button>
        <button
          className="btn btn-primary text-3xl"
          onClick={() => {
            setPrevious(value);
            setValue('x ');
          }}
        >
          +/-
        </button>
        <button
          className="btn btn-primary text-2xl flex-row"
          onClick={handleDelete}
        >
          C
        </button>
        {[7, 8, 9].map((number) => (
          <NumberBtn key={number} setValue={setValue} value={value}>
            {number}
          </NumberBtn>
        ))}
        <button
          className="btn text-3xl btn-primary"
          onClick={() => {
            setPrevious(value);
            setValue('-');
          }}
        >
          <CgMathMinus />
        </button>
        {[4, 5, 6].map((number) => (
          <NumberBtn key={number} setValue={setValue} value={value}>
            {number}
          </NumberBtn>
        ))}
        <button
          className="btn btn-primary text-3xl"
          onClick={() => {
            setPrevious(value);
            setValue('+ ');
          }}
        >
          <CgMathPlus />
        </button>
        {[1, 2, 3].map((number) => (
          <NumberBtn key={number} setValue={setValue} value={value}>
            {number}
          </NumberBtn>
        ))}
        <button
          className="btn btn-primary text-3xl"
          onClick={() => {
            setPrevious(value);
            setValue('/ ');
          }}
        >
          <CgMathDivide />
        </button>
        <NumberBtn setValue={setValue} value={value}>
          {0}
        </NumberBtn>
        <button
          className="btn btn-primary text-5xl col-span-2 p-0"
          onClick={handleResult}
        >
          <CgMathEqual />
        </button>
        <button
          className="btn btn-primary text-3xl"
          onClick={() => {
            setPrevious(value);
            setValue('x ');
          }}
        >
          <CgMathPlus className="transform rotate-45" />
        </button>
      </article>
    </section>
  );
}
