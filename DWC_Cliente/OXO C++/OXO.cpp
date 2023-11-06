#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int t[3][3];
}tablero;

typedef struct {
    int v,d,e;
}partidas;

int dos_raya(tablero t, int p) {
    int i,j,f, raya;
    
    for(i = 0; i < 3; i++) {
        for(j = 0,f = 0, raya = -1; j < 3; j++) {
            if(t.t[i][j] == p)
                f++;
            else if (t.t[i][j] == 0)
                raya = i*3+j;
        }
        if(raya >= 0 && f == 2)
            return raya;
    }   
    
    for(j = 0; j < 3; j++) {
        for(i = 0,f = 0, raya = -1; i < 3; i++) {
            if(t.t[i][j] == p)
                f++;
            else if (t.t[i][j] == 0)
                raya = i*3+j;
        }
        if(raya >= 0 && f == 2)
            return raya;
    }  
    
    for(i = 0, raya = -1, f = 0; i < 3; i++) {
        if(t.t[i][i] == p)
            f++;
        else if (t.t[i][i] == 0)
            raya = i*3+i;
    }
    
    if(raya >= 0 && f == 2)
        return raya;
    
    for(i = 0, raya = -1, f = 0; i < 3; i++) {
        if(t.t[i][2-i] == p)
            f++;
        else if (t.t[i][2-i] == 0)
            raya = 2 + i*3-i;
    }
    
    if(raya >= 0 && f == 2)
        return raya;
        
    return -1;
}

void escribir(tablero *tablero, int pos, int valor) {
    int i = pos / 3, j = pos % 3;
    
    tablero->t[i][j] = valor;
}

int tres_raya_f(tablero t) {
  int i,j,f1,f2,turno,d;
    
  for (turno = 1; turno < 3; turno++){
    for(i = 0; i < 3; i++) {
        for(j = 0,f1 = f2 = 0; j < 3; j++) {
            if(t.t[i][j] == 1)
                f1++;
            else if(t.t[i][j] == 2)
                f2++;
        }
        if( f1 == 3) {
          return d;
        } 
        else if(f2 == 3) {
          return d;
        }
    }   
  }
    
  for (turno = 1; turno < 3; turno++){
    for(j = 0; j < 3; j++) {
        for(i = 0,f1 = f2 = 0; i < 3; i++) {
            if(t.t[i][j] == 1)
                f1++;
            else if(t.t[i][j] == 2)
                f2++;
        }
        if(f1 == 3) {
          return d;
        }
        else if(f2 == 3) {
          return d;
        }
    }  
  }
    
    for(i = 0, f1 = f2 = 0; i < 3; i++) {
        if(t.t[i][i] == 1)
          f1++;
        else if(t.t[i][i] == 2)
          f2++;
    }
    
    if(f1 == 3) {
      return d;
    }
   else if(f2 == 3) {
      return d;
    }
    
    for(i = 0, f1 = f2 = 0; i < 3; i++) {
        if(t.t[i][2-i] == 1)
          f1++;
        else if(t.t[i][2-i] == 2)
          f2++;
    }
    
    if(f1 == 3) {
      return d;
    }
    else if(f2 == 3) {
      return d;
    }
    
    return d;
}

void comprobar(tablero t, int turno, partidas* p) {
  int i, j, dos = -1;
  
  dos = dos_raya(t, turno);
  
  if(dos >= 0) {
    if(turno == 2)
      p->v++;
    else
      p->d++;
    return;    
  }
  
  if(turno == 1)
    turno++;
  else
    turno--;
  
  dos = dos_raya(t, turno);
  
  if(turno == 1)
    turno++;
  else
    turno--;
  
  if(dos >= 0) {
    t.t[dos/3][dos%3] = turno;    
    if(turno == 1)
      turno++;
    else
      turno--;
    comprobar(t, turno, p);
    return;
  }
  
  
  for(i=0;i<3;i++) {
    for(j=0;j<3;j++)
      if(t.t[i][j] == 0) {
          t.t[i][j] = turno;
          if(turno == 1)
            turno++;
          else
            turno--;
          comprobar(t, turno, p);
          t.t[i][j] = 0;
          if(turno == 1)
            turno++;
          else
            turno--;
      }
  }
  
  return;
}

void dibujar(tablero t) {
    int i,j;
    char tipo;
    
    printf("\n  1 2 3\n");
    
    printf(" -------\n");
    
    for(i = 0; i < 3; i++) {
        printf("%i|",i+1);
        for(j = 0; j < 3; j++) {
            if(t.t[i][j] == 0)
                tipo = ' ';
            else if(t.t[i][j] == 1)
                tipo = 'O';
            else if(t.t[i][j] == 2)
                tipo = 'X';
            printf("%c|",tipo);   
        }
        printf("\n -------\n");
    }            
}

int calc(tablero t1, int *ctrl) {
  int i,j,res;
  partidas p, tmp, *part;
  part = (partidas*) malloc(sizeof(partidas));
  
  p.d = -1;
  
  res = dos_raya(t1, 2);
  
  if(res >= 0) {
    (*ctrl)++;
    return res;
  }
  
  res = dos_raya(t1, 1);
  
  if(res >= 0)
    return res;
  
  for(i = 0; i<3;i++)
    for(j=0;j<3;j++) {
      if(t1.t[i][j] == 0) {
        t1.t[i][j] = 2;
        comprobar(t1, 1, part); 
        tmp = *part;
        if(p.d == -1) {
          p = tmp;
          p.e = i*3+j;
        }
        else {
          if(tmp.v > p.v) {
            p = tmp;
            p.e = i*3+j;
          }
          else if (tmp.v = p.v)
            if(tmp.d < p.d) {
              p = tmp;
              p.e = i*3+j;
            }
        }
        t1.t[i][j] = 0;
        part->d = part->e = part->v = 0;
      }
    }
  
  free(part);
  
  return p.e;      
}

void usuario(tablero* t) {
    
    char columnai[256], filai[256];
    int columna,fila, i = 0;
    
    do{
        if (i)
          dibujar(*t);
        printf("\nIntroduce fila: ");
        fgets(filai,255,stdin);
        printf("\nIntroduce columna: ");
        fgets(columnai,255,stdin);
        
        columna = atol(columnai);
        fila  = atol(filai);
        
        i++;
        
        if(!(fila >= 1 && fila <= 3 && columna >= 1 && columna <= 3 && t->t[fila-1][columna-1] == 0))
            printf("\nCasilla no valida\n");
    } while(!(fila >= 1 && fila <= 3 && columna >= 1 && columna <= 3 && t->t[fila-1][columna-1] == 0));
    
    t->t[fila-1][columna-1] = 1;
}


int main() {

  int tmp, turnos = 0;
  tablero t;
  int i,j, ctrl;
  char input[256];   
    
  while (1) {
    
    turnos = 0;
    
    ctrl = 0;
    
    for(i=0;i<3;i++)
    for(j=0;j<3;j++) {
      t.t[i][j]=0;
    }
    
    do {
    printf("Quien empieza a jugar\n1)Jugador\n2)PC\n\n");            
    fgets(input,255,stdin);   
    if (!(atol(input) >= 1 && atol(input) <= 2))
      printf("\nVuelve a introducir\n\n");
  } while(!(atol(input) >= 1 && atol(input) <= 2));
    
  if(atol(input) == 1) {
    dibujar(t);
    usuario(&t);
    turnos++;
  }
    
  while(1) {    
    escribir(&t, calc(t, &ctrl), 2);
    
    turnos++;
    
    dibujar(t);
    
    if(ctrl)
      break;
    
    if(turnos == 9)
      break;
    
    usuario(&t);
    
    turnos++;
    
    if(turnos == 9)
      break;
  }
    if(ctrl)
      printf("\nPerdiste!\n\n\n");    
    else
      printf("\nEmpate!\n\n\n");    
  }
  
  
  
  return 0;
}

