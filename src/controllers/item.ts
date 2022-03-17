import { Request, Response } from 'express';
import Item from '../models/item';

const create = async(req: Request, res: Response)=>{
    try{
        await Item.create(req.body);

        res.status(200).json({ status: 'ITEM_CREATED' });
    }catch{
        res.status(500).json({ status: 'INTERNAL_ERROR' });
    };
};

const getAll = async(req: Request, res: Response)=>{
    try{
        const items = await Item.find();

        res.status(200).json({ items });
    }catch{
        res.status(500).json({ status: 'INTERNAL_ERROR' });
    };
};

const getOne = async(req: Request, res: Response)=>{
    try{
        const item = await Item.findById(req.params.id);

        if(!item){
            return res.status(404).json({ status: 'ITEM_NOT_FOUND' });
        };

        res.status(200).json({ item })
    }catch{
        res.status(500).json({ status: 'INTERNAL_ERROR' });
    };
};

const _delete = async(req: Request, res: Response)=>{
    try{
        const item = await Item.findOneAndDelete(req.body);

        if(!item){
            return res.status(404).json({ status: 'ITEM_NOT_FOUND' });
        };

        res.status(200).json({ status: 'ITEM_DELETED' });
    }catch{
        res.status(500).json({ status: 'INTERNAL_ERROR' });
    };
};

export default { create, getAll, getOne, _delete };