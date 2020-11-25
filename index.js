(function(){
    const $button = document.getElementById('js-button');
    let rnd = Math.floor( Math.random() *6 );
    
    

    
    $button.addEventListener('click', function(){
        let omikuji;
        if( rnd === 0) omikuji = '大吉';
        if( rnd === 1) omikuji = '中吉';
        if( rnd === 2) omikuji = '小吉';
        if( rnd === 3) omikuji = '吉';
        if( rnd === 4) omikuji = '凶';
        if( rnd === 5) omikuji = '大凶';        
        alert(omikuji);
    
    });
    

})();