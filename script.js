Day-4
Assignment:4

Questio:01

compare two json have the same properties without order?

Answer:

 const one={
        name:"Person1",
        age:5
    }
    const two={
        age:5,
        name:"Person1"
    }
    //JSON.stringify(one) === JSON.stringify(two); // true

    // Using Lodash
    console.log(_.isEqual(one, two));//true


function printDetails(one, two){
        console.log(`
        Name:${one.name}
        Age:${two.age}
        `)
        console.log(`
        Name:${one.name}
        Age:${two.age}
        `)
}
printDetails(one, two);

output:

true
script.js:16 
        Name:Person1
        Age:5
        
script.js:20 
        Name:Person1
        Age:5
        


Question:02

Use the Rest countries' API URL and display all the country flags in the console?

Answer:

let xhr=new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all")
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<=300){
        let jsonobj=JSON.parse(this.response);
       console.log(jsonobj)
       for(const person of jsonobj){
        console.log(`
        Flags:
        svg: ${person.flags.svg}
        png: ${person.flags.png}
        `)
       }
    }
}
xhr.send();

output:

script.js:8 
        Flags:
        svg: https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
        png: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ax.svg
        png: https://flagcdn.com/w320/ax.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/al.svg
        png: https://flagcdn.com/w320/al.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/dz.svg
        png: https://flagcdn.com/w320/dz.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/as.svg
        png: https://flagcdn.com/w320/as.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ad.svg
        png: https://flagcdn.com/w320/ad.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ao.svg
        png: https://flagcdn.com/w320/ao.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ai.svg
        png: https://flagcdn.com/w320/ai.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/aq.svg
        png: https://flagcdn.com/w320/aq.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ag.svg
        png: https://flagcdn.com/w320/ag.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ar.svg
        png: https://flagcdn.com/w320/ar.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/am.svg
        png: https://flagcdn.com/w320/am.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/aw.svg
        png: https://flagcdn.com/w320/aw.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/au.svg
        png: https://flagcdn.com/w320/au.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/at.svg
        png: https://flagcdn.com/w320/at.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/az.svg
        png: https://flagcdn.com/w320/az.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bs.svg
        png: https://flagcdn.com/w320/bs.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bh.svg
        png: https://flagcdn.com/w320/bh.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bd.svg
        png: https://flagcdn.com/w320/bd.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bb.svg
        png: https://flagcdn.com/w320/bb.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/by.svg
        png: https://flagcdn.com/w320/by.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/be.svg
        png: https://flagcdn.com/w320/be.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bz.svg
        png: https://flagcdn.com/w320/bz.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bj.svg
        png: https://flagcdn.com/w320/bj.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bm.svg
        png: https://flagcdn.com/w320/bm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bt.svg
        png: https://flagcdn.com/w320/bt.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bo.svg
        png: https://flagcdn.com/w320/bo.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bq.svg
        png: https://flagcdn.com/w320/bq.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ba.svg
        png: https://flagcdn.com/w320/ba.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bw.svg
        png: https://flagcdn.com/w320/bw.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bv.svg
        png: https://flagcdn.com/w320/bv.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/br.svg
        png: https://flagcdn.com/w320/br.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/io.svg
        png: https://flagcdn.com/w320/io.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/um.svg
        png: https://flagcdn.com/w320/um.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/vg.svg
        png: https://flagcdn.com/w320/vg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/vi.svg
        png: https://flagcdn.com/w320/vi.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bn.svg
        png: https://flagcdn.com/w320/bn.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bg.svg
        png: https://flagcdn.com/w320/bg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bf.svg
        png: https://flagcdn.com/w320/bf.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bi.svg
        png: https://flagcdn.com/w320/bi.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/kh.svg
        png: https://flagcdn.com/w320/kh.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cm.svg
        png: https://flagcdn.com/w320/cm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ca.svg
        png: https://flagcdn.com/w320/ca.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cv.svg
        png: https://flagcdn.com/w320/cv.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ky.svg
        png: https://flagcdn.com/w320/ky.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cf.svg
        png: https://flagcdn.com/w320/cf.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/td.svg
        png: https://flagcdn.com/w320/td.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cl.svg
        png: https://flagcdn.com/w320/cl.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cn.svg
        png: https://flagcdn.com/w320/cn.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cx.svg
        png: https://flagcdn.com/w320/cx.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cc.svg
        png: https://flagcdn.com/w320/cc.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/co.svg
        png: https://flagcdn.com/w320/co.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/km.svg
        png: https://flagcdn.com/w320/km.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cg.svg
        png: https://flagcdn.com/w320/cg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cd.svg
        png: https://flagcdn.com/w320/cd.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ck.svg
        png: https://flagcdn.com/w320/ck.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cr.svg
        png: https://flagcdn.com/w320/cr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/hr.svg
        png: https://flagcdn.com/w320/hr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cu.svg
        png: https://flagcdn.com/w320/cu.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cw.svg
        png: https://flagcdn.com/w320/cw.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cy.svg
        png: https://flagcdn.com/w320/cy.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/cz.svg
        png: https://flagcdn.com/w320/cz.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/dk.svg
        png: https://flagcdn.com/w320/dk.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/dj.svg
        png: https://flagcdn.com/w320/dj.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/dm.svg
        png: https://flagcdn.com/w320/dm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/do.svg
        png: https://flagcdn.com/w320/do.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ec.svg
        png: https://flagcdn.com/w320/ec.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/eg.svg
        png: https://flagcdn.com/w320/eg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sv.svg
        png: https://flagcdn.com/w320/sv.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gq.svg
        png: https://flagcdn.com/w320/gq.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/er.svg
        png: https://flagcdn.com/w320/er.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ee.svg
        png: https://flagcdn.com/w320/ee.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/et.svg
        png: https://flagcdn.com/w320/et.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/fk.svg
        png: https://flagcdn.com/w320/fk.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/fo.svg
        png: https://flagcdn.com/w320/fo.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/fj.svg
        png: https://flagcdn.com/w320/fj.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/fi.svg
        png: https://flagcdn.com/w320/fi.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/fr.svg
        png: https://flagcdn.com/w320/fr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gf.svg
        png: https://flagcdn.com/w320/gf.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pf.svg
        png: https://flagcdn.com/w320/pf.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tf.svg
        png: https://flagcdn.com/w320/tf.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ga.svg
        png: https://flagcdn.com/w320/ga.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gm.svg
        png: https://flagcdn.com/w320/gm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ge.svg
        png: https://flagcdn.com/w320/ge.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/de.svg
        png: https://flagcdn.com/w320/de.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gh.svg
        png: https://flagcdn.com/w320/gh.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gi.svg
        png: https://flagcdn.com/w320/gi.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gr.svg
        png: https://flagcdn.com/w320/gr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gl.svg
        png: https://flagcdn.com/w320/gl.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gd.svg
        png: https://flagcdn.com/w320/gd.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gp.svg
        png: https://flagcdn.com/w320/gp.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gu.svg
        png: https://flagcdn.com/w320/gu.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gt.svg
        png: https://flagcdn.com/w320/gt.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gg.svg
        png: https://flagcdn.com/w320/gg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gn.svg
        png: https://flagcdn.com/w320/gn.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gw.svg
        png: https://flagcdn.com/w320/gw.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gy.svg
        png: https://flagcdn.com/w320/gy.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ht.svg
        png: https://flagcdn.com/w320/ht.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/hm.svg
        png: https://flagcdn.com/w320/hm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/va.svg
        png: https://flagcdn.com/w320/va.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/hn.svg
        png: https://flagcdn.com/w320/hn.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/hu.svg
        png: https://flagcdn.com/w320/hu.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/hk.svg
        png: https://flagcdn.com/w320/hk.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/is.svg
        png: https://flagcdn.com/w320/is.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/in.svg
        png: https://flagcdn.com/w320/in.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/id.svg
        png: https://flagcdn.com/w320/id.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ci.svg
        png: https://flagcdn.com/w320/ci.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ir.svg
        png: https://flagcdn.com/w320/ir.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/iq.svg
        png: https://flagcdn.com/w320/iq.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ie.svg
        png: https://flagcdn.com/w320/ie.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/im.svg
        png: https://flagcdn.com/w320/im.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/il.svg
        png: https://flagcdn.com/w320/il.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/it.svg
        png: https://flagcdn.com/w320/it.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/jm.svg
        png: https://flagcdn.com/w320/jm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/jp.svg
        png: https://flagcdn.com/w320/jp.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/je.svg
        png: https://flagcdn.com/w320/je.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/jo.svg
        png: https://flagcdn.com/w320/jo.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/kz.svg
        png: https://flagcdn.com/w320/kz.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ke.svg
        png: https://flagcdn.com/w320/ke.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ki.svg
        png: https://flagcdn.com/w320/ki.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/kw.svg
        png: https://flagcdn.com/w320/kw.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/kg.svg
        png: https://flagcdn.com/w320/kg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/la.svg
        png: https://flagcdn.com/w320/la.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/lv.svg
        png: https://flagcdn.com/w320/lv.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/lb.svg
        png: https://flagcdn.com/w320/lb.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ls.svg
        png: https://flagcdn.com/w320/ls.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/lr.svg
        png: https://flagcdn.com/w320/lr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ly.svg
        png: https://flagcdn.com/w320/ly.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/li.svg
        png: https://flagcdn.com/w320/li.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/lt.svg
        png: https://flagcdn.com/w320/lt.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/lu.svg
        png: https://flagcdn.com/w320/lu.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mo.svg
        png: https://flagcdn.com/w320/mo.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mk.svg
        png: https://flagcdn.com/w320/mk.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mg.svg
        png: https://flagcdn.com/w320/mg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mw.svg
        png: https://flagcdn.com/w320/mw.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/my.svg
        png: https://flagcdn.com/w320/my.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mv.svg
        png: https://flagcdn.com/w320/mv.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ml.svg
        png: https://flagcdn.com/w320/ml.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mt.svg
        png: https://flagcdn.com/w320/mt.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mh.svg
        png: https://flagcdn.com/w320/mh.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mq.svg
        png: https://flagcdn.com/w320/mq.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mr.svg
        png: https://flagcdn.com/w320/mr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mu.svg
        png: https://flagcdn.com/w320/mu.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/yt.svg
        png: https://flagcdn.com/w320/yt.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mx.svg
        png: https://flagcdn.com/w320/mx.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/fm.svg
        png: https://flagcdn.com/w320/fm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/md.svg
        png: https://flagcdn.com/w320/md.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mc.svg
        png: https://flagcdn.com/w320/mc.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mn.svg
        png: https://flagcdn.com/w320/mn.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/me.svg
        png: https://flagcdn.com/w320/me.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ms.svg
        png: https://flagcdn.com/w320/ms.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ma.svg
        png: https://flagcdn.com/w320/ma.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mz.svg
        png: https://flagcdn.com/w320/mz.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mm.svg
        png: https://flagcdn.com/w320/mm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/na.svg
        png: https://flagcdn.com/w320/na.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/nr.svg
        png: https://flagcdn.com/w320/nr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/np.svg
        png: https://flagcdn.com/w320/np.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/nl.svg
        png: https://flagcdn.com/w320/nl.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/nc.svg
        png: https://flagcdn.com/w320/nc.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/nz.svg
        png: https://flagcdn.com/w320/nz.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ni.svg
        png: https://flagcdn.com/w320/ni.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ne.svg
        png: https://flagcdn.com/w320/ne.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ng.svg
        png: https://flagcdn.com/w320/ng.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/nu.svg
        png: https://flagcdn.com/w320/nu.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/nf.svg
        png: https://flagcdn.com/w320/nf.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/kp.svg
        png: https://flagcdn.com/w320/kp.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mp.svg
        png: https://flagcdn.com/w320/mp.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/no.svg
        png: https://flagcdn.com/w320/no.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/om.svg
        png: https://flagcdn.com/w320/om.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pk.svg
        png: https://flagcdn.com/w320/pk.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pw.svg
        png: https://flagcdn.com/w320/pw.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ps.svg
        png: https://flagcdn.com/w320/ps.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pa.svg
        png: https://flagcdn.com/w320/pa.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pg.svg
        png: https://flagcdn.com/w320/pg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/py.svg
        png: https://flagcdn.com/w320/py.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pe.svg
        png: https://flagcdn.com/w320/pe.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ph.svg
        png: https://flagcdn.com/w320/ph.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pn.svg
        png: https://flagcdn.com/w320/pn.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pl.svg
        png: https://flagcdn.com/w320/pl.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pt.svg
        png: https://flagcdn.com/w320/pt.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pr.svg
        png: https://flagcdn.com/w320/pr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/qa.svg
        png: https://flagcdn.com/w320/qa.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/xk.svg
        png: https://flagcdn.com/w320/xk.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/re.svg
        png: https://flagcdn.com/w320/re.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ro.svg
        png: https://flagcdn.com/w320/ro.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ru.svg
        png: https://flagcdn.com/w320/ru.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/rw.svg
        png: https://flagcdn.com/w320/rw.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/bl.svg
        png: https://flagcdn.com/w320/bl.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sh.svg
        png: https://flagcdn.com/w320/sh.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/kn.svg
        png: https://flagcdn.com/w320/kn.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/lc.svg
        png: https://flagcdn.com/w320/lc.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/mf.svg
        png: https://flagcdn.com/w320/mf.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/pm.svg
        png: https://flagcdn.com/w320/pm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/vc.svg
        png: https://flagcdn.com/w320/vc.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ws.svg
        png: https://flagcdn.com/w320/ws.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sm.svg
        png: https://flagcdn.com/w320/sm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/st.svg
        png: https://flagcdn.com/w320/st.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sa.svg
        png: https://flagcdn.com/w320/sa.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sn.svg
        png: https://flagcdn.com/w320/sn.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/rs.svg
        png: https://flagcdn.com/w320/rs.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sc.svg
        png: https://flagcdn.com/w320/sc.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sl.svg
        png: https://flagcdn.com/w320/sl.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sg.svg
        png: https://flagcdn.com/w320/sg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sx.svg
        png: https://flagcdn.com/w320/sx.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sk.svg
        png: https://flagcdn.com/w320/sk.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/si.svg
        png: https://flagcdn.com/w320/si.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sb.svg
        png: https://flagcdn.com/w320/sb.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/so.svg
        png: https://flagcdn.com/w320/so.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/za.svg
        png: https://flagcdn.com/w320/za.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gs.svg
        png: https://flagcdn.com/w320/gs.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/kr.svg
        png: https://flagcdn.com/w320/kr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/es.svg
        png: https://flagcdn.com/w320/es.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/lk.svg
        png: https://flagcdn.com/w320/lk.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sd.svg
        png: https://flagcdn.com/w320/sd.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ss.svg
        png: https://flagcdn.com/w320/ss.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sr.svg
        png: https://flagcdn.com/w320/sr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sj.svg
        png: https://flagcdn.com/w320/sj.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sz.svg
        png: https://flagcdn.com/w320/sz.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/se.svg
        png: https://flagcdn.com/w320/se.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ch.svg
        png: https://flagcdn.com/w320/ch.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/sy.svg
        png: https://flagcdn.com/w320/sy.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tw.svg
        png: https://flagcdn.com/w320/tw.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tj.svg
        png: https://flagcdn.com/w320/tj.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tz.svg
        png: https://flagcdn.com/w320/tz.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/th.svg
        png: https://flagcdn.com/w320/th.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tl.svg
        png: https://flagcdn.com/w320/tl.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tg.svg
        png: https://flagcdn.com/w320/tg.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tk.svg
        png: https://flagcdn.com/w320/tk.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/to.svg
        png: https://flagcdn.com/w320/to.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tt.svg
        png: https://flagcdn.com/w320/tt.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tn.svg
        png: https://flagcdn.com/w320/tn.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tr.svg
        png: https://flagcdn.com/w320/tr.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tm.svg
        png: https://flagcdn.com/w320/tm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tc.svg
        png: https://flagcdn.com/w320/tc.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/tv.svg
        png: https://flagcdn.com/w320/tv.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ug.svg
        png: https://flagcdn.com/w320/ug.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ua.svg
        png: https://flagcdn.com/w320/ua.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ae.svg
        png: https://flagcdn.com/w320/ae.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/gb.svg
        png: https://flagcdn.com/w320/gb.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/us.svg
        png: https://flagcdn.com/w320/us.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/uy.svg
        png: https://flagcdn.com/w320/uy.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/uz.svg
        png: https://flagcdn.com/w320/uz.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/vu.svg
        png: https://flagcdn.com/w320/vu.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ve.svg
        png: https://flagcdn.com/w320/ve.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/vn.svg
        png: https://flagcdn.com/w320/vn.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/wf.svg
        png: https://flagcdn.com/w320/wf.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/eh.svg
        png: https://flagcdn.com/w320/eh.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/ye.svg
        png: https://flagcdn.com/w320/ye.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/zm.svg
        png: https://flagcdn.com/w320/zm.png
        
script.js:8 
        Flags:
        svg: https://flagcdn.com/zw.svg
        png: https://flagcdn.com/w320/zw.png
        



Question:03

Use the same rest countries and print all countries name, region, sub-region and populations?

Answer:

let xhr=new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all")
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<=300){
        let jsonobj=JSON.parse(this.response);
       console.log(jsonobj)
       for(const person of jsonobj){
        console.log(`
        Name:${person.name}
        Region:${person.region}
        Subregion:${person.subregion}
        Population:${person.population}
        `)
       }
    }
}
xhr.send();

output:

script.js:8 
        Name:Afghanistan
        Region:Asia
        Subregion:Southern Asia
        Population:40218234
        
script.js:8 
        Name:Åland Islands
        Region:Europe
        Subregion:Northern Europe
        Population:28875
        
script.js:8 
        Name:Albania
        Region:Europe
        Subregion:Southern Europe
        Population:2837743
        
script.js:8 
        Name:Algeria
        Region:Africa
        Subregion:Northern Africa
        Population:44700000
        
script.js:8 
        Name:American Samoa
        Region:Oceania
        Subregion:Polynesia
        Population:55197
        
script.js:8 
        Name:Andorra
        Region:Europe
        Subregion:Southern Europe
        Population:77265
        
script.js:8 
        Name:Angola
        Region:Africa
        Subregion:Middle Africa
        Population:32866268
        
script.js:8 
        Name:Anguilla
        Region:Americas
        Subregion:Caribbean
        Population:13452
        
script.js:8 
        Name:Antarctica
        Region:Polar
        Subregion:Antarctica
        Population:1000
        
script.js:8 
        Name:Antigua and Barbuda
        Region:Americas
        Subregion:Caribbean
        Population:97928
        
script.js:8 
        Name:Argentina
        Region:Americas
        Subregion:South America
        Population:45376763
        
script.js:8 
        Name:Armenia
        Region:Asia
        Subregion:Western Asia
        Population:2963234
        
script.js:8 
        Name:Aruba
        Region:Americas
        Subregion:Caribbean
        Population:106766
        
script.js:8 
        Name:Australia
        Region:Oceania
        Subregion:Australia and New Zealand
        Population:25687041
        
script.js:8 
        Name:Austria
        Region:Europe
        Subregion:Central Europe
        Population:8917205
        
script.js:8 
        Name:Azerbaijan
        Region:Asia
        Subregion:Western Asia
        Population:10110116
        
script.js:8 
        Name:Bahamas
        Region:Americas
        Subregion:Caribbean
        Population:393248
        
script.js:8 
        Name:Bahrain
        Region:Asia
        Subregion:Western Asia
        Population:1701583
        
script.js:8 
        Name:Bangladesh
        Region:Asia
        Subregion:Southern Asia
        Population:164689383
        
script.js:8 
        Name:Barbados
        Region:Americas
        Subregion:Caribbean
        Population:287371
        
script.js:8 
        Name:Belarus
        Region:Europe
        Subregion:Eastern Europe
        Population:9398861
        
script.js:8 
        Name:Belgium
        Region:Europe
        Subregion:Western Europe
        Population:11555997
        
script.js:8 
        Name:Belize
        Region:Americas
        Subregion:Central America
        Population:397621
        
script.js:8 
        Name:Benin
        Region:Africa
        Subregion:Western Africa
        Population:12123198
        
script.js:8 
        Name:Bermuda
        Region:Americas
        Subregion:Northern America
        Population:63903
        
script.js:8 
        Name:Bhutan
        Region:Asia
        Subregion:Southern Asia
        Population:771612
        
script.js:8 
        Name:Bolivia (Plurinational State of)
        Region:Americas
        Subregion:South America
        Population:11673029
        
script.js:8 
        Name:Bonaire, Sint Eustatius and Saba
        Region:Americas
        Subregion:Caribbean
        Population:17408
        
script.js:8 
        Name:Bosnia and Herzegovina
        Region:Europe
        Subregion:Southern Europe
        Population:3280815
        
script.js:8 
        Name:Botswana
        Region:Africa
        Subregion:Southern Africa
        Population:2351625
        
script.js:8 
        Name:Bouvet Island
        Region:Antarctic Ocean
        Subregion:South Antarctic Ocean
        Population:0
        
script.js:8 
        Name:Brazil
        Region:Americas
        Subregion:South America
        Population:212559409
        
script.js:8 
        Name:British Indian Ocean Territory
        Region:Africa
        Subregion:Eastern Africa
        Population:3000
        
script.js:8 
        Name:United States Minor Outlying Islands
        Region:Americas
        Subregion:Northern America
        Population:300
        
script.js:8 
        Name:Virgin Islands (British)
        Region:Americas
        Subregion:Caribbean
        Population:30237
        
script.js:8 
        Name:Virgin Islands (U.S.)
        Region:Americas
        Subregion:Caribbean
        Population:106290
        
script.js:8 
        Name:Brunei Darussalam
        Region:Asia
        Subregion:South-Eastern Asia
        Population:437483
        
script.js:8 
        Name:Bulgaria
        Region:Europe
        Subregion:Eastern Europe
        Population:6927288
        
script.js:8 
        Name:Burkina Faso
        Region:Africa
        Subregion:Western Africa
        Population:20903278
        
script.js:8 
        Name:Burundi
        Region:Africa
        Subregion:Eastern Africa
        Population:11890781
        
script.js:8 
        Name:Cambodia
        Region:Asia
        Subregion:South-Eastern Asia
        Population:16718971
        
script.js:8 
        Name:Cameroon
        Region:Africa
        Subregion:Middle Africa
        Population:26545864
        
script.js:8 
        Name:Canada
        Region:Americas
        Subregion:Northern America
        Population:38005238
        
script.js:8 
        Name:Cabo Verde
        Region:Africa
        Subregion:Western Africa
        Population:555988
        
script.js:8 
        Name:Cayman Islands
        Region:Americas
        Subregion:Caribbean
        Population:65720
        
script.js:8 
        Name:Central African Republic
        Region:Africa
        Subregion:Middle Africa
        Population:4829764
        
script.js:8 
        Name:Chad
        Region:Africa
        Subregion:Middle Africa
        Population:16425859
        
script.js:8 
        Name:Chile
        Region:Americas
        Subregion:South America
        Population:19116209
        
script.js:8 
        Name:China
        Region:Asia
        Subregion:Eastern Asia
        Population:1402112000
        
script.js:8 
        Name:Christmas Island
        Region:Oceania
        Subregion:Australia and New Zealand
        Population:2072
        
script.js:8 
        Name:Cocos (Keeling) Islands
        Region:Oceania
        Subregion:Australia and New Zealand
        Population:550
        
script.js:8 
        Name:Colombia
        Region:Americas
        Subregion:South America
        Population:50882884
        
script.js:8 
        Name:Comoros
        Region:Africa
        Subregion:Eastern Africa
        Population:869595
        
script.js:8 
        Name:Congo
        Region:Africa
        Subregion:Middle Africa
        Population:5518092
        
script.js:8 
        Name:Congo (Democratic Republic of the)
        Region:Africa
        Subregion:Middle Africa
        Population:89561404
        
script.js:8 
        Name:Cook Islands
        Region:Oceania
        Subregion:Polynesia
        Population:18100
        
script.js:8 
        Name:Costa Rica
        Region:Americas
        Subregion:Central America
        Population:5094114
        
script.js:8 
        Name:Croatia
        Region:Europe
        Subregion:Southern Europe
        Population:4047200
        
script.js:8 
        Name:Cuba
        Region:Americas
        Subregion:Caribbean
        Population:11326616
        
script.js:8 
        Name:Curaçao
        Region:Americas
        Subregion:Caribbean
        Population:155014
        
script.js:8 
        Name:Cyprus
        Region:Europe
        Subregion:Southern Europe
        Population:1207361
        
script.js:8 
        Name:Czech Republic
        Region:Europe
        Subregion:Central Europe
        Population:10698896
        
script.js:8 
        Name:Denmark
        Region:Europe
        Subregion:Northern Europe
        Population:5831404
        
script.js:8 
        Name:Djibouti
        Region:Africa
        Subregion:Eastern Africa
        Population:988002
        
script.js:8 
        Name:Dominica
        Region:Americas
        Subregion:Caribbean
        Population:71991
        
script.js:8 
        Name:Dominican Republic
        Region:Americas
        Subregion:Caribbean
        Population:10847904
        
script.js:8 
        Name:Ecuador
        Region:Americas
        Subregion:South America
        Population:17643060
        
script.js:8 
        Name:Egypt
        Region:Africa
        Subregion:Northern Africa
        Population:102334403
        
script.js:8 
        Name:El Salvador
        Region:Americas
        Subregion:Central America
        Population:6486201
        
script.js:8 
        Name:Equatorial Guinea
        Region:Africa
        Subregion:Middle Africa
        Population:1402985
        
script.js:8 
        Name:Eritrea
        Region:Africa
        Subregion:Eastern Africa
        Population:5352000
        
script.js:8 
        Name:Estonia
        Region:Europe
        Subregion:Northern Europe
        Population:1331057
        
script.js:8 
        Name:Ethiopia
        Region:Africa
        Subregion:Eastern Africa
        Population:114963583
        
script.js:8 
        Name:Falkland Islands (Malvinas)
        Region:Americas
        Subregion:South America
        Population:2563
        
script.js:8 
        Name:Faroe Islands
        Region:Europe
        Subregion:Northern Europe
        Population:48865
        
script.js:8 
        Name:Fiji
        Region:Oceania
        Subregion:Melanesia
        Population:896444
        
script.js:8 
        Name:Finland
        Region:Europe
        Subregion:Northern Europe
        Population:5530719
        
script.js:8 
        Name:France
        Region:Europe
        Subregion:Western Europe
        Population:67391582
        
script.js:8 
        Name:French Guiana
        Region:Americas
        Subregion:South America
        Population:254541
        
script.js:8 
        Name:French Polynesia
        Region:Oceania
        Subregion:Polynesia
        Population:280904
        
script.js:8 
        Name:French Southern Territories
        Region:Africa
        Subregion:Southern Africa
        Population:140
        
script.js:8 
        Name:Gabon
        Region:Africa
        Subregion:Middle Africa
        Population:2225728
        
script.js:8 
        Name:Gambia
        Region:Africa
        Subregion:Western Africa
        Population:2416664
        
script.js:8 
        Name:Georgia
        Region:Asia
        Subregion:Western Asia
        Population:3714000
        
script.js:8 
        Name:Germany
        Region:Europe
        Subregion:Central Europe
        Population:83240525
        
script.js:8 
        Name:Ghana
        Region:Africa
        Subregion:Western Africa
        Population:31072945
        
script.js:8 
        Name:Gibraltar
        Region:Europe
        Subregion:Southern Europe
        Population:33691
        
script.js:8 
        Name:Greece
        Region:Europe
        Subregion:Southern Europe
        Population:10715549
        
script.js:8 
        Name:Greenland
        Region:Americas
        Subregion:Northern America
        Population:56367
        
script.js:8 
        Name:Grenada
        Region:Americas
        Subregion:Caribbean
        Population:112519
        
script.js:8 
        Name:Guadeloupe
        Region:Americas
        Subregion:Caribbean
        Population:400132
        
script.js:8 
        Name:Guam
        Region:Oceania
        Subregion:Micronesia
        Population:168783
        
script.js:8 
        Name:Guatemala
        Region:Americas
        Subregion:Central America
        Population:16858333
        
script.js:8 
        Name:Guernsey
        Region:Europe
        Subregion:Northern Europe
        Population:62999
        
script.js:8 
        Name:Guinea
        Region:Africa
        Subregion:Western Africa
        Population:13132792
        
script.js:8 
        Name:Guinea-Bissau
        Region:Africa
        Subregion:Western Africa
        Population:1967998
        
script.js:8 
        Name:Guyana
        Region:Americas
        Subregion:South America
        Population:786559
        
script.js:8 
        Name:Haiti
        Region:Americas
        Subregion:Caribbean
        Population:11402533
        
script.js:8 
        Name:Heard Island and McDonald Islands
        Region:Antarctic
        Subregion:Antarctic
        Population:0
        
script.js:8 
        Name:Vatican City
        Region:Europe
        Subregion:Southern Europe
        Population:451
        
script.js:8 
        Name:Honduras
        Region:Americas
        Subregion:Central America
        Population:9904608
        
script.js:8 
        Name:Hungary
        Region:Europe
        Subregion:Central Europe
        Population:9749763
        
script.js:8 
        Name:Hong Kong
        Region:Asia
        Subregion:Eastern Asia
        Population:7481800
        
script.js:8 
        Name:Iceland
        Region:Europe
        Subregion:Northern Europe
        Population:366425
        
script.js:8 
        Name:India
        Region:Asia
        Subregion:Southern Asia
        Population:1380004385
        
script.js:8 
        Name:Indonesia
        Region:Asia
        Subregion:South-Eastern Asia
        Population:273523621
        
script.js:8 
        Name:Ivory Coast
        Region:Africa
        Subregion:Western Africa
        Population:26378275
        
script.js:8 
        Name:Iran (Islamic Republic of)
        Region:Asia
        Subregion:Southern Asia
        Population:83992953
        
script.js:8 
        Name:Iraq
        Region:Asia
        Subregion:Western Asia
        Population:40222503
        
script.js:8 
        Name:Ireland
        Region:Europe
        Subregion:Northern Europe
        Population:4994724
        
script.js:8 
        Name:Isle of Man
        Region:Europe
        Subregion:Northern Europe
        Population:85032
        
script.js:8 
        Name:Israel
        Region:Asia
        Subregion:Western Asia
        Population:9216900
        
script.js:8 
        Name:Italy
        Region:Europe
        Subregion:Southern Europe
        Population:59554023
        
script.js:8 
        Name:Jamaica
        Region:Americas
        Subregion:Caribbean
        Population:2961161
        
script.js:8 
        Name:Japan
        Region:Asia
        Subregion:Eastern Asia
        Population:125836021
        
script.js:8 
        Name:Jersey
        Region:Europe
        Subregion:Northern Europe
        Population:100800
        
script.js:8 
        Name:Jordan
        Region:Asia
        Subregion:Western Asia
        Population:10203140
        
script.js:8 
        Name:Kazakhstan
        Region:Asia
        Subregion:Central Asia
        Population:18754440
        
script.js:8 
        Name:Kenya
        Region:Africa
        Subregion:Eastern Africa
        Population:53771300
        
script.js:8 
        Name:Kiribati
        Region:Oceania
        Subregion:Micronesia
        Population:119446
        
script.js:8 
        Name:Kuwait
        Region:Asia
        Subregion:Western Asia
        Population:4270563
        
script.js:8 
        Name:Kyrgyzstan
        Region:Asia
        Subregion:Central Asia
        Population:6591600
        
script.js:8 
        Name:Lao People's Democratic Republic
        Region:Asia
        Subregion:South-Eastern Asia
        Population:7275556
        
script.js:8 
        Name:Latvia
        Region:Europe
        Subregion:Northern Europe
        Population:1901548
        
script.js:8 
        Name:Lebanon
        Region:Asia
        Subregion:Western Asia
        Population:6825442
        
script.js:8 
        Name:Lesotho
        Region:Africa
        Subregion:Southern Africa
        Population:2142252
        
script.js:8 
        Name:Liberia
        Region:Africa
        Subregion:Western Africa
        Population:5057677
        
script.js:8 
        Name:Libya
        Region:Africa
        Subregion:Northern Africa
        Population:6871287
        
script.js:8 
        Name:Liechtenstein
        Region:Europe
        Subregion:Central Europe
        Population:38137
        
script.js:8 
        Name:Lithuania
        Region:Europe
        Subregion:Northern Europe
        Population:2794700
        
script.js:8 
        Name:Luxembourg
        Region:Europe
        Subregion:Western Europe
        Population:632275
        
script.js:8 
        Name:Macao
        Region:Asia
        Subregion:Eastern Asia
        Population:649342
        
script.js:8 
        Name:North Macedonia
        Region:Europe
        Subregion:Southern Europe
        Population:2083380
        
script.js:8 
        Name:Madagascar
        Region:Africa
        Subregion:Eastern Africa
        Population:27691019
        
script.js:8 
        Name:Malawi
        Region:Africa
        Subregion:Eastern Africa
        Population:19129955
        
script.js:8 
        Name:Malaysia
        Region:Asia
        Subregion:South-Eastern Asia
        Population:32365998
        
script.js:8 
        Name:Maldives
        Region:Asia
        Subregion:Southern Asia
        Population:540542
        
script.js:8 
        Name:Mali
        Region:Africa
        Subregion:Western Africa
        Population:20250834
        
script.js:8 
        Name:Malta
        Region:Europe
        Subregion:Southern Europe
        Population:525285
        
script.js:8 
        Name:Marshall Islands
        Region:Oceania
        Subregion:Micronesia
        Population:59194
        
script.js:8 
        Name:Martinique
        Region:Americas
        Subregion:Caribbean
        Population:378243
        
script.js:8 
        Name:Mauritania
        Region:Africa
        Subregion:Western Africa
        Population:4649660
        
script.js:8 
        Name:Mauritius
        Region:Africa
        Subregion:Eastern Africa
        Population:1265740
        
script.js:8 
        Name:Mayotte
        Region:Africa
        Subregion:Eastern Africa
        Population:226915
        
script.js:8 
        Name:Mexico
        Region:Americas
        Subregion:North America
        Population:128932753
        
script.js:8 
        Name:Micronesia (Federated States of)
        Region:Oceania
        Subregion:Micronesia
        Population:115021
        
script.js:8 
        Name:Moldova (Republic of)
        Region:Europe
        Subregion:Eastern Europe
        Population:2617820
        
script.js:8 
        Name:Monaco
        Region:Europe
        Subregion:Western Europe
        Population:39244
        
script.js:8 
        Name:Mongolia
        Region:Asia
        Subregion:Eastern Asia
        Population:3278292
        
script.js:8 
        Name:Montenegro
        Region:Europe
        Subregion:Southern Europe
        Population:621718
        
script.js:8 
        Name:Montserrat
        Region:Americas
        Subregion:Caribbean
        Population:4922
        
script.js:8 
        Name:Morocco
        Region:Africa
        Subregion:Northern Africa
        Population:36910558
        
script.js:8 
        Name:Mozambique
        Region:Africa
        Subregion:Eastern Africa
        Population:31255435
        
script.js:8 
        Name:Myanmar
        Region:Asia
        Subregion:South-Eastern Asia
        Population:54409794
        
script.js:8 
        Name:Namibia
        Region:Africa
        Subregion:Southern Africa
        Population:2540916
        
script.js:8 
        Name:Nauru
        Region:Oceania
        Subregion:Micronesia
        Population:10834
        
script.js:8 
        Name:Nepal
        Region:Asia
        Subregion:Southern Asia
        Population:29136808
        
script.js:8 
        Name:Netherlands
        Region:Europe
        Subregion:Western Europe
        Population:17441139
        
script.js:8 
        Name:New Caledonia
        Region:Oceania
        Subregion:Melanesia
        Population:271960
        
script.js:8 
        Name:New Zealand
        Region:Oceania
        Subregion:Australia and New Zealand
        Population:5084300
        
script.js:8 
        Name:Nicaragua
        Region:Americas
        Subregion:Central America
        Population:6624554
        
script.js:8 
        Name:Niger
        Region:Africa
        Subregion:Western Africa
        Population:24206636
        
script.js:8 
        Name:Nigeria
        Region:Africa
        Subregion:Western Africa
        Population:206139587
        
script.js:8 
        Name:Niue
        Region:Oceania
        Subregion:Polynesia
        Population:1470
        
script.js:8 
        Name:Norfolk Island
        Region:Oceania
        Subregion:Australia and New Zealand
        Population:2302
        
script.js:8 
        Name:Korea (Democratic People's Republic of)
        Region:Asia
        Subregion:Eastern Asia
        Population:25778815
        
script.js:8 
        Name:Northern Mariana Islands
        Region:Oceania
        Subregion:Micronesia
        Population:57557
        
script.js:8 
        Name:Norway
        Region:Europe
        Subregion:Northern Europe
        Population:5379475
        
script.js:8 
        Name:Oman
        Region:Asia
        Subregion:Western Asia
        Population:5106622
        
script.js:8 
        Name:Pakistan
        Region:Asia
        Subregion:Southern Asia
        Population:220892331
        
script.js:8 
        Name:Palau
        Region:Oceania
        Subregion:Micronesia
        Population:18092
        
script.js:8 
        Name:Palestine, State of
        Region:Asia
        Subregion:Western Asia
        Population:4803269
        
script.js:8 
        Name:Panama
        Region:Americas
        Subregion:Central America
        Population:4314768
        
script.js:8 
        Name:Papua New Guinea
        Region:Oceania
        Subregion:Melanesia
        Population:8947027
        
script.js:8 
        Name:Paraguay
        Region:Americas
        Subregion:South America
        Population:7132530
        
script.js:8 
        Name:Peru
        Region:Americas
        Subregion:South America
        Population:32971846
        
script.js:8 
        Name:Philippines
        Region:Asia
        Subregion:South-Eastern Asia
        Population:109581085
        
script.js:8 
        Name:Pitcairn
        Region:Oceania
        Subregion:Polynesia
        Population:56
        
script.js:8 
        Name:Poland
        Region:Europe
        Subregion:Central Europe
        Population:37950802
        
script.js:8 
        Name:Portugal
        Region:Europe
        Subregion:Southern Europe
        Population:10305564
        
script.js:8 
        Name:Puerto Rico
        Region:Americas
        Subregion:Caribbean
        Population:3194034
        
script.js:8 
        Name:Qatar
        Region:Asia
        Subregion:Western Asia
        Population:2881060
        
script.js:8 
        Name:Republic of Kosovo
        Region:Europe
        Subregion:Eastern Europe
        Population:1775378
        
script.js:8 
        Name:Réunion
        Region:Africa
        Subregion:Eastern Africa
        Population:840974
        
script.js:8 
        Name:Romania
        Region:Europe
        Subregion:Eastern Europe
        Population:19286123
        
script.js:8 
        Name:Russian Federation
        Region:Europe
        Subregion:Eastern Europe
        Population:144104080
        
script.js:8 
        Name:Rwanda
        Region:Africa
        Subregion:Eastern Africa
        Population:12952209
        
script.js:8 
        Name:Saint Barthélemy
        Region:Americas
        Subregion:Caribbean
        Population:9417
        
script.js:8 
        Name:Saint Helena, Ascension and Tristan da Cunha
        Region:Africa
        Subregion:Western Africa
        Population:4255
        
script.js:8 
        Name:Saint Kitts and Nevis
        Region:Americas
        Subregion:Caribbean
        Population:53192
        
script.js:8 
        Name:Saint Lucia
        Region:Americas
        Subregion:Caribbean
        Population:183629
        
script.js:8 
        Name:Saint Martin (French part)
        Region:Americas
        Subregion:Caribbean
        Population:38659
        
script.js:8 
        Name:Saint Pierre and Miquelon
        Region:Americas
        Subregion:Northern America
        Population:6069
        
script.js:8 
        Name:Saint Vincent and the Grenadines
        Region:Americas
        Subregion:Caribbean
        Population:110947
        
script.js:8 
        Name:Samoa
        Region:Oceania
        Subregion:Polynesia
        Population:198410
        
script.js:8 
        Name:San Marino
        Region:Europe
        Subregion:Southern Europe
        Population:33938
        
script.js:8 
        Name:Sao Tome and Principe
        Region:Africa
        Subregion:Middle Africa
        Population:219161
        
script.js:8 
        Name:Saudi Arabia
        Region:Asia
        Subregion:Western Asia
        Population:34813867
        
script.js:8 
        Name:Senegal
        Region:Africa
        Subregion:Western Africa
        Population:16743930
        
script.js:8 
        Name:Serbia
        Region:Europe
        Subregion:Southern Europe
        Population:6908224
        
script.js:8 
        Name:Seychelles
        Region:Africa
        Subregion:Eastern Africa
        Population:98462
        
script.js:8 
        Name:Sierra Leone
        Region:Africa
        Subregion:Western Africa
        Population:7976985
        
script.js:8 
        Name:Singapore
        Region:Asia
        Subregion:South-Eastern Asia
        Population:5685807
        
script.js:8 
        Name:Sint Maarten (Dutch part)
        Region:Americas
        Subregion:Caribbean
        Population:40812
        
script.js:8 
        Name:Slovakia
        Region:Europe
        Subregion:Central Europe
        Population:5458827
        
script.js:8 
        Name:Slovenia
        Region:Europe
        Subregion:Southern Europe
        Population:2100126
        
script.js:8 
        Name:Solomon Islands
        Region:Oceania
        Subregion:Melanesia
        Population:686878
        
script.js:8 
        Name:Somalia
        Region:Africa
        Subregion:Eastern Africa
        Population:15893219
        
script.js:8 
        Name:South Africa
        Region:Africa
        Subregion:Southern Africa
        Population:59308690
        
script.js:8 
        Name:South Georgia and the South Sandwich Islands
        Region:Americas
        Subregion:South America
        Population:30
        
script.js:8 
        Name:Korea (Republic of)
        Region:Asia
        Subregion:Eastern Asia
        Population:51780579
        
script.js:8 
        Name:Spain
        Region:Europe
        Subregion:Southern Europe
        Population:47351567
        
script.js:8 
        Name:Sri Lanka
        Region:Asia
        Subregion:Southern Asia
        Population:21919000
        
script.js:8 
        Name:Sudan
        Region:Africa
        Subregion:Northern Africa
        Population:43849269
        
script.js:8 
        Name:South Sudan
        Region:Africa
        Subregion:Middle Africa
        Population:11193729
        
script.js:8 
        Name:Suriname
        Region:Americas
        Subregion:South America
        Population:586634
        
script.js:8 
        Name:Svalbard and Jan Mayen
        Region:Europe
        Subregion:Northern Europe
        Population:2562
        
script.js:8 
        Name:Swaziland
        Region:Africa
        Subregion:Southern Africa
        Population:1160164
        
script.js:8 
        Name:Sweden
        Region:Europe
        Subregion:Northern Europe
        Population:10353442
        
script.js:8 
        Name:Switzerland
        Region:Europe
        Subregion:Central Europe
        Population:8636896
        
script.js:8 
        Name:Syrian Arab Republic
        Region:Asia
        Subregion:Western Asia
        Population:17500657
        
script.js:8 
        Name:Taiwan
        Region:Asia
        Subregion:Eastern Asia
        Population:23503349
        
script.js:8 
        Name:Tajikistan
        Region:Asia
        Subregion:Central Asia
        Population:9537642
        
script.js:8 
        Name:Tanzania, United Republic of
        Region:Africa
        Subregion:Eastern Africa
        Population:59734213
        
script.js:8 
        Name:Thailand
        Region:Asia
        Subregion:South-Eastern Asia
        Population:69799978
        
script.js:8 
        Name:Timor-Leste
        Region:Asia
        Subregion:South-Eastern Asia
        Population:1318442
        
script.js:8 
        Name:Togo
        Region:Africa
        Subregion:Western Africa
        Population:8278737
        
script.js:8 
        Name:Tokelau
        Region:Oceania
        Subregion:Polynesia
        Population:1411
        
script.js:8 
        Name:Tonga
        Region:Oceania
        Subregion:Polynesia
        Population:105697
        
script.js:8 
        Name:Trinidad and Tobago
        Region:Americas
        Subregion:Caribbean
        Population:1399491
        
script.js:8 
        Name:Tunisia
        Region:Africa
        Subregion:Northern Africa
        Population:11818618
        
script.js:8 
        Name:Turkey
        Region:Asia
        Subregion:Western Asia
        Population:84339067
        
script.js:8 
        Name:Turkmenistan
        Region:Asia
        Subregion:Central Asia
        Population:6031187
        
script.js:8 
        Name:Turks and Caicos Islands
        Region:Americas
        Subregion:Caribbean
        Population:38718
        
script.js:8 
        Name:Tuvalu
        Region:Oceania
        Subregion:Polynesia
        Population:11792
        
script.js:8 
        Name:Uganda
        Region:Africa
        Subregion:Eastern Africa
        Population:45741000
        
script.js:8 
        Name:Ukraine
        Region:Europe
        Subregion:Eastern Europe
        Population:44134693
        
script.js:8 
        Name:United Arab Emirates
        Region:Asia
        Subregion:Western Asia
        Population:9890400
        
script.js:8 
        Name:United Kingdom of Great Britain and Northern Ireland
        Region:Europe
        Subregion:Northern Europe
        Population:67215293
        
script.js:8 
        Name:United States of America
        Region:Americas
        Subregion:Northern America
        Population:329484123
        
script.js:8 
        Name:Uruguay
        Region:Americas
        Subregion:South America
        Population:3473727
        
script.js:8 
        Name:Uzbekistan
        Region:Asia
        Subregion:Central Asia
        Population:34232050
        
script.js:8 
        Name:Vanuatu
        Region:Oceania
        Subregion:Melanesia
        Population:307150
        
script.js:8 
        Name:Venezuela (Bolivarian Republic of)
        Region:Americas
        Subregion:South America
        Population:28435943
        
script.js:8 
        Name:Vietnam
        Region:Asia
        Subregion:South-Eastern Asia
        Population:97338583
        
script.js:8 
        Name:Wallis and Futuna
        Region:Oceania
        Subregion:Polynesia
        Population:11750
        
script.js:8 
        Name:Western Sahara
        Region:Africa
        Subregion:Northern Africa
        Population:510713
        
script.js:8 
        Name:Yemen
        Region:Asia
        Subregion:Western Asia
        Population:29825968
        
script.js:8 
        Name:Zambia
        Region:Africa
        Subregion:Eastern Africa
        Population:18383956
        
script.js:8 
        Name:Zimbabwe
        Region:Africa
        Subregion:Southern Africa
        Population:14862927
        




