/* eslint-disable react/prop-types */

export const IconComponent = ({ icons }) => {
    console.log(icons);
    // Recorre el arreglo de íconos
    const IconsWithWhiteFill = icons.map((icon, index) => {
        console.log(index)
        const newIcon = {
            ...icon,
            name: icon.name,
            props: {
                ...icon.props,
                children: icon.props.children.map(child => {
                    // console.log(child)
                })
            }
        }
        console.log(newIcon.icon)
    });

    // console.log(IconsWithWhiteFill)

    // Recorre los íconos
    // const newOnes = icons.map(icon => {
    //     // Obtiene el SVG del ícono
    //     const svg = icon.icon;

    //     // Recorre todos los elementos 'path' del SVG
    //     svg.paths.map(path => {
    //         console.log(path);
    //         // Elimina el atributo 'fill' de cada 'path'
    //         // path.setAttribute('fill', 'none');
    //     });
    // });

    // console.log(newOnes);

    return (
        <div>
            {icons.map((icon, index) => {
                return (
                    <div key={index} className="w-[70px] h-[70px]">
                        {icon.icon}
                    </div>
                )

            })
            }
        </div >
    )
}


