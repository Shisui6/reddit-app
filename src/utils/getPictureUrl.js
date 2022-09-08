export const getPictureUrl = (image) => {
    return image.slice(0, (image.indexOf('?')));
}

export const defProf = 'https://www.redditstatic.com/avatars/avatar_default_02_FF4500.png';