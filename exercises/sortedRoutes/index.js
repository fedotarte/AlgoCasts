const ROUTES = [
    { from: 'Питер', to: 'Минск' },
    { from: 'Киев', to: 'Новосибирск' },
    { from: 'Череповец', to: 'Москва' },
    { from: 'Минск', to: 'Киев' },
    { from: 'Москва', to: 'Питер' },
]

const sortedRoutes = []
const froms = ROUTES.map((i) => i.from)
const tos = ROUTES.map((i) => i.to)
const head = froms.find((f) => f !== tos.find((t) => t === f))
const tail = tos.find((t) => t !== froms.find((f) => f === t))
const foundHead = ROUTES.find((i) => i.from === head)
const foundTail = ROUTES.find((i) => i.to === tail)
const findNextRoute = (route) => ROUTES.find((i) => i.from === route?.to)
const findPrevRoute = (route) => ROUTES.find((i) => i.to === route?.from)
const routesEqual = (route1, route2) => Object.keys(route1).every(key => route1[key] === route2[key]);
const callSeveralTimes = (i, fn, par) => {
    if (i > 0) {
        res = fn(par);
        return callSeveralTimes(i - 1, fn, res);
    }
    return par;
}

const iterateThrough = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        if (index > 1) {
            sortedRoutes[index] = callSeveralTimes(index, findNextRoute, foundHead);
        }
    }
}

iterateThrough(ROUTES);


console.log(sortedRoutes);
