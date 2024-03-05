const Hero = ({ name, subtitle, city, socialMedia, photo }) => {
    return (
        <section>
            <div>
                <h1>
                    {name}
                </h1>
                <p>
                    {subtitle}
                </p>
                <h5>
                    {city}
                </h5>
            </div>
            <ul>
                {socialMedia.map((item, index) => (
                    <li key={index}>
                        <img src={ item.src } />
                    </li>
                ))}
            </ul>
            <div>
                <figure>
                    <img src={ photo} />
                </figure>
            </div>
        </section>
    )
}

export default Hero;

