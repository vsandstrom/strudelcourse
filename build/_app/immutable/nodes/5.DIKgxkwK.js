import{i as y,c as x,s as e,o as T,a as H,t as _}from"../chunks/disclose-version.yqNkPQFL.js";import{p as D,a as k}from"../chunks/runtime.Bd7Y9sb8.js";import{S as s,d as S}from"../chunks/strudel.0lJ7Z5If.js";import{H as B}from"../chunks/Header.ObqdNs5e.js";var C=_(`<div><!> <h3 class="pagetitle svelte-1uad18p">SOUND(  )</h3> <div class="links svelte-1uad18p"><a href="#concepts">Concepts</a> <a href="#drums">Drum cheat-sheet</a></div> <div class="links examples svelte-1uad18p">Examples: <a href="#sound1">1</a> <a href="#sound2">2</a> <a href="#sound3">3</a> <a href="#sound4">4</a> <a href="#sound5">5</a></div> <div id="sound1"><p>1. In this first example we are using some built in drums to create a
      simple rhythm.<br> The weird notation below, the <b>bd</b> and the <b>sd</b> are often used to abbreviate drums, as in <b>B</b>ass<b>D</b>rum
      and <b>S</b>nare<b>D</b>rum.</p> <p>Everything within the quotes <b id="quotes-pattern">(" ")</b> is interpreted as a pattern. The space
      between each word is there so the program knows how many sounds is in the
      pattern.</p></div> <!> <div id="sound2"><p>2. Others that we can use per default are <b>cb</b> and <b>hh</b> among
      others, which stand for <b>C</b>ow<b>B</b>ell and <b>H</b>i<b>H</b>at.
      These are common names for the different drums and cymbals of a drum kit.</p> <table id="drums" class="svelte-1uad18p"><thead><tr><th class="svelte-1uad18p">Real drum names</th><th class="svelte-1uad18p">Strudel short-hand</th></tr></thead><tbody id="drumnames"><tr><td class="svelte-1uad18p"><b>B</b>ass<b>D</b>rum</td><td class="svelte-1uad18p">bd</td></tr><tr><td class="svelte-1uad18p"><b>S</b>nare<b>D</b>rum</td><td class="svelte-1uad18p">sd</td></tr><tr><td class="svelte-1uad18p"><b>RIM</b>shot</td><td class="svelte-1uad18p">rim</td></tr><tr><td class="svelte-1uad18p"><b>H</b>i<b>H</b>at (closed)</td><td class="svelte-1uad18p">hh</td></tr><tr><td class="svelte-1uad18p"><b>O</b>pen hi<b>H</b>at</td><td class="svelte-1uad18p">oh</td></tr><tr><td class="svelte-1uad18p"><b>CR</b>ash</td><td class="svelte-1uad18p">cr</td></tr><tr><td class="svelte-1uad18p"><b>R</b>i<b>D</b>e</td><td class="svelte-1uad18p">rd</td></tr><tr><td class="svelte-1uad18p"><b>H</b>igh, <b>M</b>edium and <b>L</b>ow <b>T</b>oms</td><td class="svelte-1uad18p">ht, mt, lt</td></tr><tr><td class="svelte-1uad18p"><b>C</b>ow<b>B</b>ell</td><td class="svelte-1uad18p">cb</td></tr></tbody></table> <p id="sound2-2">In this example we have added the brackets <b>([  ])</b>. They are used for
      grouping sounds into sub-patterns. All the sounds inside the <b>[  ]</b> will play within the time it takes for one sound outside the <b>[  ]</b> to play.</p></div> <!> <div id="sound3"><p>3. There is also the comma <b>(,)</b> which makes sounds play on top of
      eachother at the same time. Notice the difference between grouping with
      a space: <b>[hh cb]</b> between and grouping with a comma: <b>[bd,
      hh]</b>.</p></div> <!> <div id="sound4"><p>4. There is one more thing. To repeat a sound, you can use the
      multiplication symbol <b>(*)</b>. Combined with a number <b>(*5)</b> and written
      close to the name of a sound, it tells the sound to play that many times
      during its normal duration.</p></div> <!> <div id="sound5"><p>5. Just for fun, here is a strudel-program using all of the above
      techniques to make a drum beat. It contains 5 different examples 
      which takes the previous example and adds something to it. 
      To run each example, remove the <b>'//'</b> in front of each row of
      text.</p> <ol class="svelte-1uad18p"><li class="svelte-1uad18p">The first example plays 4 <b>B</b>ass<b>D</b>rums.</li> <li class="svelte-1uad18p">The second uses sub-patterns to play a <b>B</b>ass<b>D</b>rum 
          and a <b>S</b>nare<b>D</b>rum at the same time.</li> <li class="svelte-1uad18p">Adding <b>H</b>i<b>H</b>ats between the other drums from the above
          example.</li> <li class="svelte-1uad18p">Adding even more <b>H</b>i<b>H</b>ats, now using sub-patterns to 
          play at the same time as the <b>B</b>ass<b>D</b>rum <b>S</b>nare<b>D</b>rum.</li> <li class="svelte-1uad18p">This last example is the most complex, repeating some drums with the <b>'*'</b>, and even making sub-patterns WITHIN sub-patterns!</li></ol> <p>The possibilities are endless!</p></div> <!> <h3>Concepts:</h3> <div id="concepts" class="svelte-1uad18p"><h4>Commands:</h4> <ul><li><b>sound()</b> - the command we run to use sub-pattern</li></ul> <h4>Syntax:</h4> <ol class="svelte-1uad18p"><li class="svelte-1uad18p"><b><a href="#sound1">" "</a></b> - grouping sounds into a pattern.</li> <li class="svelte-1uad18p"><b><a href="#sound2-2">[ ]</a></b> - grouping sounds into a sub-pattern.</li> <li class="svelte-1uad18p"><b><a href="#sound3">,</a></b> - allowing sounds to be played simultaneously</li> <li class="svelte-1uad18p"><b><a href="#sound4">*</a></b> - repeating a perticular sound (ex: "bd*4")</li></ol></div></div>`);function N(a,o){k(o,!1);const t=S.sound;y();var d=T(a,!0,C),r=H(d),b=e(e(r,!0)),p=e(e(b,!0)),h=e(e(p,!0)),m=e(e(h,!0)),l=e(e(m,!0)),v=e(e(l,!0)),i=e(e(v,!0)),c=e(e(i,!0)),n=e(e(c,!0)),f=e(e(n,!0)),u=e(e(f,!0)),g=e(e(u,!0)),w=e(e(g,!0));B(r,{}),s(l,{title:"sound()",get url(){return t[0]}}),s(i,{title:"sound()",get url(){return t[1]}}),s(n,{title:"sound()",get url(){return t[2]}}),s(u,{title:"sound()",get url(){return t[3]},height:320}),s(w,{title:"sound()",get url(){return t[4]},height:800}),x(a,d),D()}export{N as component};