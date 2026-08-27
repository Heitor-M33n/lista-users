function User ({ image, firstName, lastName, age, gender, email, phone, companyName, companyTitle, adressCity, adressStateCode }) {
    return (
        <>
            <div className="cartao">
                <div className="block1">
                    <img src={image} alt="Foto da pessoa" />
                    <div className="block2">
                        <h2>{firstName} {lastName}</h2>
                        <h3>{age} anos | {gender}</h3>
                    </div>
                </div>

                <hr className="divider"/>

                <div className="block1">
                    <div className="block3">
                        <h3><strong>Email: </strong></h3>
                        <h3><strong>Telefone: </strong></h3>
                        <h3><strong>Empresa: </strong></h3>
                        <h3><strong>Cargo: </strong></h3>
                        <h3><strong>Cidade: </strong></h3>
                    </div>
                    <div className="block3">
                        <h3>{email}</h3>
                        <h3>{phone}</h3>
                        <h3>{companyName}</h3>
                        <h3>{companyTitle}</h3>
                        <h3>{adressCity} - {adressStateCode}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;