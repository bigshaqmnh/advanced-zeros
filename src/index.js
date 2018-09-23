module.exports = function getZerosCount(number, base) {
  let i = 0, j = 0, div = 2, count = 0, flag = false, countZeros = 0;
  let p = [], q = [], c = [];
  //факторизуем base
  do {
    if (base % div === 0) {
      base /= div;
      count++;
      flag = true;
    } else {
        if (flag) {
          p[j] = div;
          q[j] = count;
          j++;
        }
        
        div++;
        count = 0;
        flag = false;
    }
  } while (div <= base);

  p[j] = div;
  q[j] = count;
  //смотрим колько раз p[i] входит в number!
  for (i = 0; i < p.length; ++i) {
    div = 1;
    c[i] = 0;
 
    while (div <= number) {
      div *= p[i];
      c[i] += Math.floor(number / div);
    }
  }
  //Находим минимальное c[i] - это и есть кол-во нулей
  for (i = 0; i < q.length; ++i) {
    countZeros = Math.min(Math.floor(c[0] / q[0]), Math.floor(c[i] / q[i]));
  }

  return countZeros;
}