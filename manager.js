const currencyFormat = (num) => {
    return '¥' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

const trans = [
    {
        id: "1",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 20000,
        transaction_fee: 20,
        note: "",
        time: "2020-05-04 11:29"
    },
    {
        id: "2",
        status: "Confirmed",
        from: "0xb6e687887e7af54dca5810baa6b2ec8d45ddaa36",
        to: "0x3a346598f382a11889ba3df2f3340104a5982008",
        amount: 2500000,
        transaction_fee: 50,
        note: "",
        time: "2020-04-29 20:04"
    },
    {
        id: "3",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        amount: 4000,
        transaction_fee: 30,
        note: "",
        time: "2020-04-28 13:20"
    },
    {
        id: "4",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        amount: 15000,
        transaction_fee: 20,
        note: "",
        time: "2020-04-28 13:05"
    },
    {
        id: "5",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x99181faf837cce92ebed158f012bbda204719ad7",
        amount: 20000,
        transaction_fee: 20,
        note: "",
        time: "2020-03-27 12:56"
    },
    {
        id: "6",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 100000,
        transaction_fee: 30,
        note: "",
        time: "2020-03-27 11:30"
    },
    {
        id: "7",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 50000,
        transaction_fee: 30,
        note: "",
        time: "2020-03-27 11:23"
    },
    {
        id: "8",
        status: "Confirmed",
        from: "0x687422eea2cb73b5d3e242ba5456b782919afc85",
        to: "0x3a346598f382a11889ba3df2f3340104a5982008",
        amount: 100000,
        transaction_fee: 30,
        note: "",
        time: "2020-03-27 11:14"
    },
    {
        id: "9",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 100000,
        transaction_fee: 20,
        note: "",
        time: "2020-02-27 11:06"
    },
    {
        id: "10",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 100000,
        transaction_fee: 30,
        note: "",
        time: "2020-02-26 10:57"
    },
    {
        id: "11",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 10000,
        transaction_fee: 10,
        note: "",
        time: "2020-02-26 10:48"
    },
    {
        id: "12",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x2f6f29b89e833b68e5172ef856303df442415c61",
        amount: 31000,
        transaction_fee: 20,
        note: "",
        time: "2020-01-11 17:36"
    },
    {
        id: "13",
        status: "Confirmed",
        from: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        to: "0x8ac7bdb1cf548773cfaa175928366fda03e4e6fd",
        amount: 1000,
        transaction_fee: 10,
        note: "",
        time: "2020-01-10 12:17"
    },
    {
        id: "14",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        amount: 135000,
        transaction_fee: 30,
        note: "",
        time: "2020-01-07 11:15"
    }
]

  const dataGroup = (table)=>{
  let group = table.reduce((r, a) => {
    r[a.time.substring(0, 7)] = [...r[a.time.substring(0, 7)] || [], a];
    return r;
   }, {});
   var result = Object.keys(group).map(function(k) { return group[k]; });
   return result
}

/**const month=[];
const initData = () => {
    const tbody = document.getElementById('tbody'); 
    const table = dataGroup(trans);
    for(let i=0; i<trans.length;i++){
        table.forEach(element => {
           for(let j=0;j<element.length;j++){
               console.log(element[j])
           }
        });
        }	
    
}
**/
const initData = () => {
    const tbody = document.getElementById('tbody');  
    for (let tran of trans) {
        let row = `<tr>
                            <td>${tran.id}</td>
                            <td>${tran.status}</td>
                            <td>${tran.amount}</td>
                            <td>${tran.transaction_fee}</td>
                            <td>${tran.note}</td>
                            <td>${tran.time}</td>
                        </tr>`;
                    
        tbody.innerHTML += row;
    }	
}



initData();

