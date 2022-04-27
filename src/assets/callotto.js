        var _num = [];
        text = '';
        textDuplicate = '';
        textSumAll = '';
        // from database
        _num.push({
            num: '428',
            up: 70,
            down: 50,
            tood: 50
        }, {
            num: '28',
            up: 50,
            down: 50,
            tood: 0
        }, {
            num: '428',
            up: 50,
            down: 50,
            tood: 50
        }, {
            num: '428',
            up: 50,
            down: 50,
            tood: 50
        }, {
            num: '428',
            up: 50,
            down: 50,
            tood: 50
        }, {
            num: '428',
            up: 50,
            down: 50,
            tood: 50
        }, {
            num: '428',
            up: 50,
            down: 50,
            tood: 50
        });
        
        for (let i = 0; i < _num.length; i++) {
            text += '<tr><td>' + _num[i].num + '</td><td>' + _num[i].up + '</td><td>' + _num[i].down + '</td><td>' + _num[i].tood + '</td><td>' + sum(_num[i]) + '</td></tr>'
        }

        this.sumDuplicate(_num);
        this.sumAll(_num);

        document.getElementById('listTable').innerHTML = text;

        function add(num, _up, _down, _tood) {
            //from database
            text = '';
            textDuplicate = '';
            textSumAll = '';

            _num.push({
                num: num,
                up: parseInt(_up),
                down: parseInt(_down),
                tood: parseInt(_tood)
            });
            for (let i = 0; i < _num.length; i++) {
                text += '<tr><td>' + _num[i].num + '</td><td>' + _num[i].up + '</td><td>' + _num[i].down + '</td><td>' + _num[i].tood + '</td><td>' + sum(_num[i]) + '</td></tr>'
            }
            document.getElementById('listTable').innerHTML = text;
            document.getElementById('num').value = '';
            document.getElementById('up').value = '';
            document.getElementById('down').value = '';
            document.getElementById('tood').value = '';

            this.sumDuplicate(_num);
            this.sumAll(_num);
            console.log(text)
        }
        function sumAll(_num) {
            const sumUp = _num.map(item => item.up).reduce((prev, curr) => prev + curr, 0);
            const sumDown = _num.map(item => item.down).reduce((prev, curr) => prev + curr, 0);
            const sumTood = _num.map(item => item.tood).reduce((prev, curr) => prev + curr, 0);
            const sumAll = parseInt(sumUp) + parseInt(sumDown) + parseInt(sumTood);
            textSumAll = '<tr><td>' + sumUp + '</td><td>' + sumDown + '</td><td>' + sumTood + '</td><td>' + sumAll + '</td></tr>';
            document.getElementById('sumAllTable').innerHTML = textSumAll;
        }
        function sum(_num) {
            return parseInt(_num.up) + parseInt(_num.down) + parseInt(_num.tood);
        }
        function sumDuplicate(_num) {
            let numDuplicate = duplicate(_num);
            for (let i = 0; i < numDuplicate.length; i++) {
                if(numDuplicate[i][1]>=6){
                    textDuplicate += '<tr><td>' + numDuplicate[i][0] + '</td><td style="background:red;color:white;text-align:center;">' + numDuplicate[i][1] + '</td></tr>'
                }else{
                    textDuplicate += '<tr><td>' + numDuplicate[i][0] + '</td><td style="text-align:center;">' + numDuplicate[i][1] + '</td></tr>'
                }
   
            }
            document.getElementById('duplicateTable').innerHTML = textDuplicate;
        }
        function duplicate(_num) {
            const counts = {};
            _num.forEach(el => {
                counts[el.num] = counts[el.num] ? (counts[el.num] += 1) : 1;
            });
            const countsSorted = Object.entries(counts).sort(([_, a], [__, b]) => a - b);
            return countsSorted;
        }
