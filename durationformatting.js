function formatDuration (seconds) {
    if (seconds == 0){
        return 'now'
        }

    var second = seconds%60;
    var minute = Math.floor(seconds/60)%60;
    var hour = Math.floor(Math.floor(seconds/60)/60)%24;
    var day = Math.floor(Math.floor(Math.floor(seconds/60)/60)/24)%365;
    var year = Math.floor(Math.floor(Math.floor(Math.floor(seconds/60)/60)/24)/365);

    var input = [year, day, hour, minute, second];
    var format_singular = ['year,','day,','hour,','minute,','second,'];
    var format_plural = ['years,','days,','hours,','minutes,','seconds,'];
    var output = [];

    var index = 0;

    for (var i = 0; i < input.length;i++){
        if (input[i] > 1){
            output.push(input[i].toString(),format_plural[i]);
        }
        else if (input[i] == 1){
            output.push(input[i].toString(),format_singular[i]);
            }
        }
    if (output.length>2){
        output[output.length-3] = output[output.length-3].replace(',','') + ' and';
        output[output.length-1] = output[output.length-1].replace(',','');
    }
    else{
        output[output.length-1] = output[output.length-1].replace(',','');
    }

    return output.join(' ')
}
