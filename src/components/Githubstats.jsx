export const Githubstats = () => {
    return (
        <>
            <div id="githubstat">
                <div id="githubstat-child">
                    <h1>Github Statistics</h1>
                    <img id="first-git" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=dilasathapa&amp;theme=dracula&amp;bg_color=0D1117" alt="githubstat" />
                    <div id="git-side">
                        {/* <img src="https://github-readme-stats.vercel.app/api?username=dilasathapa" alt="stats2" /> */}
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=dilasathapa" alt="stat3" />
                    </div>
                    {/* <img src="" alt="" /> */}


                </div>
            </div>
        </>
    )
}