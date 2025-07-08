const puppeteer = require('puppeteer')

async function sendMessage(){
    const browser = await puppeteer.launch({headless: false, userDataDir: './user_data'})

    const page = await browser.newPage()

    const url = "https://discord.com/channels/1304500194561232976/1304500195051962474"

    await page.goto(url, {waitUntil: 'load'})

    const line1 = "꧁༺ AoTR Trading Community ༻꧂"
    const line2 = "Welcome to the ultimate community for AoTR Trading. Whether you're a seasoned trader or just getting started, this server is your go-to place to connect with other players, get trade advice, share deals, and win big through community events."
    const line3 = "What you'll find here:"
    const line4 = "✦ 💬 Active Chat & Discussions"
    const line5 = "✦ 🤝 Trade Listings & Offers"
    const line6 = "✦ 🎓 Help with Trade Values"
    const line7 = "✦ 🎮 Weekly Events & Competitions"
    const line8 = "✦ 🎉 Massive Daily Giveaways"
    const line9 = "⚡ Custom AoTR Role Tag"
    const line10 = "✦ 🔗 Official Value List (coming soon)"
    const line11 = "⚔️ Join the community today: https://discord.gg/qSrMmqPWF6"

    setTimeout(()=>{
        page.type("span[data-slate-zero-width='n']", line1)
        setTimeout(()=>{
            page.keyboard.down('Shift')
            page.keyboard.press('Enter')
            page.type("span[data-slate-zero-width='n']", line2)
            setTimeout(()=>{
                page.keyboard.down('Shift')
                page.keyboard.press('Enter')
                page.keyboard.down('Shift')
                page.keyboard.press('Enter')
                page.type("span[data-slate-zero-width='n']", line3)
                setTimeout(()=>{
                    page.keyboard.down('Shift')
                    page.keyboard.press('Enter')
                    page.keyboard.down('Shift')
                    page.keyboard.press('Enter')
                    page.type("span[data-slate-zero-width='n']", line4)
                    setTimeout(()=>{
                        page.keyboard.down('Shift')
                        page.keyboard.press('Enter')
                        page.type("span[data-slate-zero-width='n']", line5)
                        setTimeout(()=>{
                            page.keyboard.down('Shift')
                            page.keyboard.press('Enter')
                            page.type("span[data-slate-zero-width='n']", line6)
                            setTimeout(()=>{
                                page.keyboard.down('Shift')
                                page.keyboard.press('Enter')
                                page.type("span[data-slate-zero-width='n']", line7)
                                setTimeout(()=>{
                                    page.keyboard.down('Shift')
                                    page.keyboard.press('Enter')
                                    page.type("span[data-slate-zero-width='n']", line8)
                                    setTimeout(()=>{
                                        page.keyboard.down('Shift')
                                        page.keyboard.press('Enter')
                                        page.type("span[data-slate-zero-width='n']", line9)
                                        setTimeout(()=>{
                                            page.keyboard.down('Shift')
                                            page.keyboard.press('Enter')
                                            page.type("span[data-slate-zero-width='n']", line10)
                                            setTimeout(()=>{
                                                page.keyboard.down('Shift')
                                                page.keyboard.press('Enter')
                                                page.keyboard.down('Shift')
                                                page.keyboard.press('Enter')
                                                page.type("span[data-slate-zero-width='n']", line11)
                                                setTimeout(()=>{
                                                    page.keyboard.up('Shift')
                                                    page.keyboard.press('Enter')
                                                    setTimeout(()=>{
                                                        browser.close()
                                                    }, 3000)
                                                }, Math.floor(Math.random() * (500000 - 60000 + 1)) + 60000)
                                            }, 11000)
                                        }, 11000)
                                    }, 11000)
                                }, 11000)
                            }, 11000)
                        }, 11000)
                    }, 11000)
                }, 11000)
            }, 11000)
        }, 11000)
    }, 60000)
}

sendMessage()