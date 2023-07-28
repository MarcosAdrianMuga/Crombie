//1)
function solution(param1, param2) {
  return param1 + param2;
}
//2)
function solution(year) {
  return Math.ceil(year / 100);
}
//3)
function solution(inputString) {
  const inverso = inputString.split("").reverse().join("");
  if (inputString === inverso) {
    return true;
  }
  return false;
}

//4)
function solution(inputArray) {
  var may = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > may) {
      may = inputArray[i] * inputArray[i + 1];
    }
  }
  return may;
}

//5)
function solution(n) {
  return n * n + (n - 1) * (n - 1);
}

//6)
function solution(statues) {
  statues.sort((a, b) => a - b);
  var cantidad = 0;
  for (let i = 0; i < statues.length; i++) {
    if (statues[i + 1] - statues[i] > 1 && statues[i + 1] !== undefined) {
      console.log(cantidad, statues[i], statues[i + 1]);
      cantidad += statues[i + 1] - statues[i] - 1;
    }
  }
  return cantidad;
}
//7)
function solution(sequence) {
  let elimina2 = 0;

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      elimina2++;
      if (elimina2 > 1) {
        return false;
      }

      if (i > 1 && sequence[i] <= sequence[i - 2]) {
        if (i < sequence.length - 1 && sequence[i + 1] <= sequence[i - 1]) {
          return false;
        }
      }
    }
  }

  return true;
}

//8)
function solution(matrix) {
  let total = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        break;
      } else {
        total += matrix[j][i];
      }
    }
  }
  return total;
}

//9)
function solution(inputArray) {
  var mayor = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > mayor) {
      mayor = inputArray[i].length;
    }
  }
  return inputArray.filter((e) => e.length === mayor);
}
//10)
function solution(s1: string, s2: string): number {
  let count: number = 0;
  let s1Arr: string[] = s1.split("");
  let s2Arr: string[] = s2.split("");
  for (let i = 0; i < s1Arr.length; i++) {
    if (s2Arr.includes(s1Arr[i])) {
      count++;
      s2Arr.splice(s2Arr.indexOf(s1Arr[i]), 1);
    }
  }
  return count;
}
//11)
function solution(n: number): boolean {
  let prim: string[] = [];
  let seg: string[] = [];
  let otro: string = n.toString();
  for (let i = 0; i < otro.length; i++) {
    if (i + 1 <= otro.length / 2) {
      prim.push(otro[i]);
    } else {
      seg.push(otro[i]);
    }
  }
  let suma1: number = 0;
  let suma2: number = 0;
  let total1: number[] = prim.map((e) => (suma1 += Number(e)));
  let total2: number[] = seg.map((e) => (suma2 += Number(e)));
  return suma1 === suma2;
}
//12)
function solution(a: number[]): number[] {
  let ordenado = a.filter((x) => x !== -1).sort((a, b) => a - b);
  let index: number = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = ordenado[index];
      index++;
    }
  }
  return a;
}
//13)
function solution(inputString: string): string {
  const stack = [];
  let result = "";

  for (let char of inputString) {
    if (char === "(") {
      stack.push(result);
      result = "";
    } else if (char === ")") {
      const reversed = result.split("").reverse().join("");
      result = stack.pop() + reversed;
    } else {
      result += char;
    }
  }

  return result;
}
//14)
function solution(a: number[]): number[] {
  let team1 = 0;
  let team2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1 += a[i];
    } else {
      team2 += a[i];
    }
  }
  return [team1, team2];
}
//15)
function solution(picture: string[]): string[] {
  const width = picture[0].length;
  const border = "*".repeat(width + 2);
  const borderedPicture = picture.map((str) => `*${str}*`);

  borderedPicture.unshift(border);
  borderedPicture.push(border);

  return borderedPicture;
}
