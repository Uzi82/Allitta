import { info } from "../";

export async function getInfo(jwt: string | undefined): Promise<info> {
    let data = {
        name: 'Amishka Dissanayake',
        full_name: 'Amishka Janith Dissanayake',
        nic: 200028702523,
        birthday: '2000/10/13',
        gender: 1,
        phone_number: 89626330400,
        street: '42B/3, Buddhaloka mawatha, Suwarapola, Piliyandalaadsfhgkajgdsgjvadgjfvjadfgjvgvadfvjgkvasjgjvsagjagkvhfkvghfdjgh',
        city: 'Piliyandala',
        zip_code: 10300
    }
    let phone = data.phone_number.toString().replace(/\D/g, "");
    if (phone.length) {
        phone = "+" + phone;
    }
    if (phone.length >= 3) {
        phone = phone.slice(0, 2) + " (" + phone.slice(2);
    }
    if (phone.length >= 8) {
        phone = phone.slice(0, 7) + ") " + phone.slice(7);
    }
    if (phone.length >= 13) {
        phone = phone.slice(0, 12) + "-" + phone.slice(12);
    }
    if (phone.length >= 18) {
        phone = phone.slice(0, 17);
    }
    let sex = data.gender === 1 ? 'Male': 'Female'
    return {
        ...data,
        phone_number: phone,
        gender: sex
    }
}