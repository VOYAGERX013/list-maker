class List {
    constructor(givenList) {
        this.array = givenList || [];
        this.add = (...args) => {
            if (args.length === 1){
                this.array.push(args[0]);
            } else{
                this.dumpList(args);
            }
        };

        this.dumpList = (list) => {
            list.map((elem) => {
                this.array.push(elem);
            });
        };

        this.removeLast = () => {
            this.removeAt(this.array.length - 1);
            return this.array;
        };
        this.removeFirst = () => {
            this.removeAt(0);
            return this.array;
        };
        this.removeAt = (idx) => {
            this.array.splice(idx, 1);
            return this.array;
        };

        this.removeIndexes = (...args) => {
            const indices = args;
            indices.map((elem) => {
                this.array.splice(elem, 1);
            })
            return this.array;
        }

        this.removeVal = (val) => {
            this.array = this.array.filter((elem) => {
                if (elem !== val) {
                    return elem;
                }
            });
            return this.array;
        };
        this.sortAsc = () => {
            this.array.sort();
            return this.array;
        };

        this.sortDesc = () => {
            this.array.sort();
            this.array.reverse();
            return this.array;
        };

        this.empty = () => {
            this.array = [];
            return this.array;
        };

        this.findPositions = (val) => {
            let positions = [];
            this.array.map((elem, idx) => {
                if (elem === val) {
                    positions.push(idx);
                }
            });

            return positions;
        };

        this.numOccurrences = (elem) => {
            return this.findPositions(elem).length;
        };

        this.removeRepeats = () => {
            this.array.map((elem) => {
                const numOccurrences = this.numOccurrences(elem);
                if (numOccurrences > 1) {
                    const positions = this.findPositions(elem);
                    for (let i = 1; i < positions.length; i++) {
                        this.removeAt(positions[i]);
                    }
                }
            });
            return this.array;
        };

        this.splitPairs = () => {
            this.splitList(2);
            return this.array;
        };

        this.splitList = (elem_len) => {
            const singleArr = this.array;
            this.empty();
            singleArr.map((elem, idx) => {
                if ((idx + 1) % elem_len == 0) {
                    const returnArr = [];
                    for (let i = elem_len; i > 0; i--) {
                        returnArr.push(singleArr[idx + 1 - i]);
                    }
                    this.array.push(returnArr);
                }
            });
            return this.array;
        };

        this.concatenate = () => {
            let string = "";
            this.array.map((elem) => {
                string += elem;
            })

            return string;
        }

        this.summate = () => {
            let sum = 0;
            this.array.map((elem) => {
                sum += Number(elem);
            })

            return sum;
        }

        this.average = () => {
            const summation = this.summate();
            return summation / this.array.length;
        }

        this.clone = () => {
            return this.array;
        }

        this.convertToStrings = () => {
            for (let i=0; i < this.array.length; i++){
                this.array[i] = String(this.array[i]);
            }
            return this.array;
        }

        this.convertToNumbers = () => {
            for (let i=0; i < this.array.length; i++){
                this.array[i] = Number(this.array[i]);
            }
            return this.array;
        }

        this.roundAllDigits = (decimal_places) => {
            for (let i=0; i < this.array.length; i++){
                this.array[i] = this.array[i].toFixed(decimal_places);
            }
            return this.array;
        }

        this.removeFirstOccurrence = (val) => {
            let stopFiltering = false;
            this.array = this.array.filter((elem) => {
                if (elem !== val || stopFiltering) {
                    return elem;
                } else {
                    stopFiltering = true;
                }
            });
            return this.array;
        }

        this.sortInnerList = (idx_sort) => {
            const colData = [];
            this.array.map((elem) => {
                colData.push(elem[idx_sort]);
            })
            colData.sort();
            const sortedArray = [];
            for (let i=0; i < this.array.length; i++){
                for (let j=0; j < colData.length; j++){
                    if (this.array[i][idx_sort] === colData[j]){
                        sortedArray[j] = this.array[i];
                    }
                }
            }
            this.array = sortedArray;
            return this.array;
        }
    }
}

module.exports.List = List;
