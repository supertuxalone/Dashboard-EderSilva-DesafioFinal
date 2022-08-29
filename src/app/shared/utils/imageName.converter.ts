export function getImageFromVehicleName(vehicleName: string, imageFormat: string): string {

    const vehicleNameAsList: string[] = vehicleName.split(" ");

    const isCompoundName: boolean = vehicleNameAsList.length > 1;

    let imageName = vehicleNameAsList[0].toLowerCase();

    if (isCompoundName) {
        imageName += compoundNameFormatter(vehicleNameAsList);
    }

    imageName += `.${imageFormat}`;

    return imageName;
}

function compoundNameFormatter(vehicleNameAsList: string[]): string {

    let imageName = "";
    const listLength = vehicleNameAsList.length;

    for (let i = 1; i < listLength; i++) {

        const compoundName = vehicleNameAsList[i];

        // Obtenha o comprimento do nome composto. ('ranger'.length --> 4)
        const compoundNameLength = compoundName.length;

        // Converta a primeira letra em maiúscula. ('r' --> 'R')
        const firstLetterToUpper = compoundName[0].toUpperCase();

        // Obter a substring do nome composto ('ranger' --> 'anger')
        const compoundNameSubstring = compoundName.substring(1, compoundNameLength);

        // Junte-se para formar o nome do composto. ('R' + 'anger' --> 'Ranger')
        const compoundNameFormatted = firstLetterToUpper + compoundNameSubstring;

        imageName += compoundNameFormatted;
    }

    return imageName;
}