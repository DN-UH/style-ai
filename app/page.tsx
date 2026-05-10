const card={border:'1px solid #4a3b1e',borderRadius:24,padding:22,background:'#121212'} as const;
const gold='#d7b46a';

export default function Page(){
  return <main style={{minHeight:'100vh',padding:22,background:'linear-gradient(135deg,#070707,#17110a)',color:'#f7f0df',fontFamily:'Arial, sans-serif'}}>
    <div style={{maxWidth:1100,margin:'0 auto'}}>
      <nav style={{display:'flex',justifyContent:'space-between',gap:16,alignItems:'center',padding:'12px 0'}}>
        <strong style={{color:gold,letterSpacing:2}}>STYLE AI</strong>
        <span style={{border:'1px solid #4a3b1e',borderRadius:999,padding:'8px 12px'}}>Private Beta</span>
      </nav>
      <section style={{padding:'56px 0'}}>
        <p style={{color:gold,letterSpacing:3,fontSize:12}}>AI PERSONAL STYLE OS</p>
        <h1 style={{fontSize:'clamp(42px,8vw,78px)',lineHeight:.95,margin:'12px 0'}}>Your lifelong AI fashion, grooming and personal brand assistant.</h1>
        <p style={{fontSize:18,lineHeight:1.65,color:'#cfc4ac',maxWidth:760}}>Upload your photo, define your lifestyle, discover your best colors, build signature outfits, review your look, save favorites and prepare your personal brand book. This is the first private beta experience.</p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:26}}>
          <a href='/onboarding' style={{background:gold,color:'#111',borderRadius:999,padding:'14px 18px',fontWeight:800}}>Start beta onboarding</a>
          <a href='/pricing' style={{border:'1px solid #4a3b1e',borderRadius:999,padding:'14px 18px'}}>View tiers</a>
        </div>
      </section>
      <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:16}}>
        {[
          ['AI Style Scan','Personal color palette, undertone, contrast, style archetype and avoid colors.'],
          ['Outfit Review','Mirror selfie review for fit, color harmony, formality and accessories.'],
          ['Daily Feed','What to wear today, saved looks, confidence reminders and rotation logic.'],
          ['Affiliate Income','Share Style AI and earn recurring monthly commission from paid referrals.']
        ].map(([t,d])=><div key={t} style={card}><h3 style={{color:gold,marginTop:0}}>{t}</h3><p style={{color:'#cfc4ac',lineHeight:1.55}}>{d}</p></div>)}
      </section>
      <footer style={{padding:'38px 0',color:'#9f9277'}}>Install this page on iPhone: Safari Share button → Add to Home Screen.</footer>
    </div>
  </main>
}
