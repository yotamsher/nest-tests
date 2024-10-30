import { Controller, Get, Param, Post, Query, StreamableFile } from '@nestjs/common';
import { createReadStream, writeFileSync } from 'fs';
import { join } from 'path';
import { randomUUID } from 'crypto';

const STATIC_DIR = "c:\\tests\\test_files"

@Controller('static-files')
export class StaticFilesController {
    
    @Get(':name')
    getFile(@Param('name') file_name: string): StreamableFile {
      const file = createReadStream(join(STATIC_DIR, file_name));
      return new StreamableFile(file, {
        type: 'application/json',
    //    disposition: 'attachment; filename="obj_list.json"',
        // If you want to define the Content-Length value to another value instead of file's length:
        // length: 123,
      });
    }

    @Post(':name')
    createFile(@Param('name') file_name: string, @Query('count') count: number) {
        let customers = [];
        for (let i = 0; i < count; i++) {
        
        const customer = {
            index: i,
            id: randomUUID(),
            name: "Newbie Corp.",
            order_count: 0,
            address: "Po Box City",
            timeout: Math.floor(Math.random() * 1000),
        }
        customers.push(customer);
    }
        const jsonString = JSON.stringify(customers);
        console.log(jsonString);
        writeFileSync(join(STATIC_DIR, `${file_name}_${count}.json`), jsonString);
    
      }

}

