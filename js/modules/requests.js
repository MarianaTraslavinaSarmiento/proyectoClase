



//7.Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const statusRequests = async()=>{
    let res = await fetch ("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = new Set()
    data.forEach(request =>{
        let {status}=request
        dataUpdate.add(status)
    })

    //Convertir el set en un array
    let objetoConvertido = Array.from(dataUpdate)
    return objetoConvertido
    
}


//9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllRequestsDeliveredLate = async()=>{

    let res = await fetch ("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(request =>{

        let {date_wait, date_delivery} = request;

        let fechaEsperada = Date.parse(date_wait)
        let fechaEntrega = Date.parse(date_delivery)

        if (fechaEntrega > fechaEsperada) {
            dataUpdate.push({
                codigo_pedido: request.code_request,
                codigo_cliente: request.code_client,
                fecha_esperada: request.date_wait,
                fecha_entrega: request.date_delivery
            });

        }

    })

    return dataUpdate

}

//10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.


export const getAllRequestsDelivered2DaysAgo = async()=>{
    let res = await fetch ("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(request => {
        if (request.date_delivery != null){
            let fechaEsperada = new Date(request.date_wait)
            let fechaEntrega = new Date(request.date_delivery)
            let diferencia = fechaEsperada - fechaEntrega
            diferencia = diferencia/(1000*60*60*24)
            if(diferencia >= 2){
                dataUpdate.push({
                    codigo_pedido: request.code_request,
                    codigo_cliente: request.code_client,
                    fecha_esperada: request.date_wait,
                    fecha_entrega: request.date_delivery
                })
            }
        }
    })

    return dataUpdate
}


//11. Devuelve un listado de todos los pedidos que fueron rechazados en 2009.

export const getAllRequestsRejectedIn2009 = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(request =>{
        if (request.date_request.startsWith("2009")&&request.status=='Rechazado'){
            dataUpdate.push(request)}
    })

    return dataUpdate

}

//12.Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.

export const getAllRequestOfJanuary = async()=>{
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json()
    let dataUpdate = []

    data.forEach(request => {
        let date = new Date(request.date_delivery)
        if (date.getMonth() == "0") {
            dataUpdate.push(request);
        }
    });

    return dataUpdate
}


// ------- MODULOS ---------

export const getAllRequests = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    return data
}