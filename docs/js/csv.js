function csvParse(csvPath) {
    return new Promise((resolve, reject) => {
        Papa.parse(csvPath, {
            download: true,
            header: true,
            complete: result => {
                if (result.errors.length > 0) {
                    reject("Erro ao realizar o parse do arquivo CSV!");
                }
                const devolutivas = result.data;
                resolve(devolutivas);
            },
            error: err => reject(err)
        });
    });
}