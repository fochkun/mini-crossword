// src/entities/Word.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('words')
export class WordEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  word!: string;

  @Column({ type: 'varchar', length: 255 })
  clue!: string;

  @Column({ type: 'int' })
  length!: number;

  @Column({ type: 'char', length: 1, nullable: true })
  letter_1!: string | null;

  @Column({ type: 'char', length: 1, nullable: true })
  letter_2!: string | null;

  @Column({ type: 'char', length: 1, nullable: true })
  letter_3!: string | null;

  @Column({ type: 'char', length: 1, nullable: true })
  letter_4!: string | null;

  @Column({ type: 'char', length: 1, nullable: true })
  letter_5!: string | null;

  @Column({ type: 'char', length: 1, nullable: true })
  letter_6!: string | null;

  @Column({ type: 'char', length: 1, nullable: true })
  letter_7!: string | null;

  @CreateDateColumn()
  created_at!: Date;
}
