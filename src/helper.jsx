export const checkBudget = (budget, remaining) => {
    let clas

    if ((budget / 4) > remaining) {
        clas = 'alert alert-danger';
    } else if ((budget / 2) > remaining) {
        clas = 'alert alert-warning';
    } else {
        clas = 'alert alert-success';
    }

    return clas
}