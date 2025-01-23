export default function Footer() {

    const footerLinks = [
        { title: "GitHub", link: "https://github.com/SobczakL" },
        { title: "X", link: "https://x.com/lucqaz_" },
        { title: "Twitch", link: "https://www.twitch.tv/lucqaz_" },
    ]

    return (
        <div className="fixed bottom-0 w-full h-fit flex justify-between bg-inherit gap-2 px-4 md:px-6 py-2 md:py-3">
            <p className="min-w-fit text-subtext-bg cursor-pointer">
                <a href="mailto:lucassobczak3@gmail.com">
                    lucassobczak3@gmail.com
                </a>
            </p>
            <div className="flex justify-between w-fit gap-2 sm:gap-4 md:gap-6">
                {footerLinks.map((link, index) => (
                    <a key={index} href={link.link}>
                        <span>
                            {link.title}
                        </span>
                    </a>
                ))}
            </div>
        </div>

    )
}
