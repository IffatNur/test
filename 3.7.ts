{

    class Counter{
     static count : number = 0;
     static increment(){
        return Counter.count = Counter.count + 1
     }
     decrement(){
        return Counter.count = Counter.count-1
     }
    }
    // const count1 = new Counter()
    const increment1 = Counter.increment()
    console.log(increment1);

    // const count2 = new Counter()
    const increment2 = Counter.increment()
    console.log(increment2);

}