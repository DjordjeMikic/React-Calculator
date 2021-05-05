// @param e @type event
// @param cb1 @type function
// @param cb2 @type function
// @param cb3 @type function
// @param cb4 @type function
// @param cb5 @type function
// @param cb6 @type function

const keyboard = (e, cb1, cb2, cb3, cb4, cb5, cb6) => {
  switch(e.which) {
    case 96 || 48:
      cb2(0);
    break;
    case 97 || 49:
      cb1(1);
    break;
    case 98 || 50:
      cb1(2);
    break;
    case 99 || 51:
      cb1(3);
    break;
    case 100 || 52:
      cb1(4);
    break;
    case 101 || 53:
      cb1(5);
    break;
    case 102 || 54:
      cb1(6);
    break;
    case 103 || 55:
      cb1(7);
    break;
    case 104 || 56:
      cb1(8);
    break;
    case 105 || 57:
      cb1(9);
    break;
    case 13:
      cb4();
    break;
    case 110 || 190:
      cb3('.');
    break;
    case 67:
      cb6();
    break;
    case 107 || 187:
      cb5('+');
    break;
    case 109 || 189:
      cb5('-');
    break;
    case 111 || 191:
      cb5('/');
    break;
    case 106:
      cb5('*');
    break;
    default:
      return;
  }
}

export default keyboard;
