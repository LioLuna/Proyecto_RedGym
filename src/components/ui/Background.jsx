import gymImg from "@/assets/FondoGym.png";

function Background ({ children }) {
    return (
        <section
        className="
        min-h-screen
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        "

        style = {{
            backgroundImage: `
            linear-gradient(
            rgba(0,0,0,0.75),
            rgba(0,0,0,0.75)
            ),
            url(${gymImg})
            `,
        }}
        >
            {children}
        </section>
    );
}
export default Background;